require("dotenv").config();

const countBy = require("lodash.countby");
const fs = require("fs");
const { graphql } = require("@octokit/graphql");
const { WebClient } = require("@slack/web-api");

const slackUserClient = new WebClient(process.env.SLACK_USER_TOKEN);
const slackBotClient = new WebClient(process.env.SLACK_BOT_TOKEN);

const repoQuery = fs.readFileSync("./repos.graphql", "utf8");

const fetchRepos = (org, cursor) =>
  graphql(repoQuery, {
    org,
    cursor,
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

const isVulnerable = (repo) =>
  !repo.isArchived && repo.vulnerabilityAlerts.totalCount > 0;

async function* fetchVulnerableRepos(org) {
  // paginate
  let cursor = null;

  while (true) {
    const results = await fetchRepos(org, cursor);
    const { edges, pageInfo } = results.organization.repositories;

    for (const edge of edges) {
      const repo = edge.node;
      if (isVulnerable(repo)) {
        yield repo;
      }
    }

    cursor = pageInfo.endCursor;
    if (!pageInfo.hasNextPage) {
      break;
    }
  }
}

const getMostFrequentValue = (objects, prop) => {
  const counts = countBy(objects, prop);
  // https://stackoverflow.com/a/27376421/358804
  return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
};

const getPrimaryChannel = async (query) => {
  const result = await slackUserClient.search.messages({
    query,
    sort: "timestamp",
  });
  return getMostFrequentValue(result.messages.matches, "channel.id");
};

const generateMessage = (repo) => {
  const url = `https://github.com/${repo.nameWithOwner}`;
  // the channel ID
  const adminsGitHubID = "C02KW46DP";

  const steps = [];
  if (repo.pullRequests.totalCount > 0) {
    steps.push(
      `merge <${url}/pulls?q=is%3Apr+is%3Aopen+label%3Adependencies|the open pull requests>`
    );
  }
  if (repo.vulnerabilityAlerts.totalCount > 0) {
    steps.push(`fix the outstanding <${url}/network/alerts|alerts>`);
  }
  const joinedSteps = steps.join(", then ");

  return `The <${url}|${repo.nameWithOwner}> repository has dependency vulnerabilities. To resolve, ${joinedSteps}. Reach out to <#${adminsGitHubID}> with any questions.`;
};

const handleVulnerabilities = async (repo) => {
  const url = `https://github.com/${repo.nameWithOwner}`;
  const channel = await getPrimaryChannel(url);
  const text = `<#${channel}> - ` + generateMessage(repo);

  console.log(`${repo.nameWithOwner}…`);

  // slackBotClient.conversations.join({ channel });
  slackBotClient.chat.postMessage({
    channel: "#transient",
    text,
    link_names: true,
    unfurl_links: false,
    unfurl_media: false,
  });
};

const run = async () => {
  const org = "18F";
  const repos = fetchVulnerableRepos(org);
  for await (const repo of repos) {
    handleVulnerabilities(repo);
  }
};

run();
