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

const excludeChannel = (channel) =>
  // the bot will only be able to join public channels, which is what the following means
  !channel.is_channel ||
  channel.name === "transient" ||
  channel.name.endsWith("-public");

const getPrimaryChannel = async (query) => {
  const result = await slackUserClient.search.messages({
    query,
    sort: "timestamp",
  });

  const matches = result.messages.matches.filter(
    (match) => !excludeChannel(match.channel)
  );
  if (matches.length === 0) {
    return null;
  }

  return getMostFrequentValue(matches, "channel.id");
};

const repoToUrl = (repo) => `https://github.com/${repo.nameWithOwner}`;

const generateMessage = (repo) => {
  const url = repoToUrl(repo);
  // the channel ID
  const adminsGitHubID = "C02KXM98G";

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

  return `:wave: The <${url}|${repo.nameWithOwner}> repository has possible security vulnerabilities in its dependencies :kevin-home-alone-scream: To resolve,

:captain-planet: ${joinedSteps}, or
:han-solo-frozen: <https://handbook.tts.gsa.gov/github/#archiving|archive the repository>

Reach out to <#${adminsGitHubID}> with any questions :octocat: Thanks!`;
};

const notifyChannel = async (channel, repo) => {
  // TODO change

  const text = `<#${channel}> - ` + generateMessage(repo);

  // await slackBotClient.conversations.join({ channel });
  await slackBotClient.chat.postMessage({
    channel: "#transient",
    text,
    link_names: true,
    unfurl_links: false,
    unfurl_media: false,
  });
};

const notifyAboutUnknownChannel = (repo) => {
  const url = repoToUrl(repo);
  const text = `<${url}|${repo.nameWithOwner}> has vulnerabilities, but I wasn't able to find a corresponding channel.`;

  return slackBotClient.chat.postMessage({
    channel: "#transient", // TODO change
    text,
    link_names: true,
    unfurl_links: false,
    unfurl_media: false,
  });
};

const handleVulnerabilities = async (repo) => {
  const url = repoToUrl(repo);
  const channel = await getPrimaryChannel(url);

  if (channel) {
    await notifyChannel(channel, repo);
  } else {
    await notifyAboutUnknownChannel(repo);
  }
};

const run = async () => {
  const org = "18F";
  const repos = fetchVulnerableRepos(org);
  let anyFailures = false;

  for await (const repo of repos) {
    console.log(`${repo.nameWithOwner}…`);

    handleVulnerabilities(repo).catch((err) => {
      process.stderr.write(`ERROR for ${repo.nameWithOwner}: `);
      console.error(err);
      anyFailures = true;
    });
  }

  if (anyFailures) {
    process.exit(1);
  }
};

run();
