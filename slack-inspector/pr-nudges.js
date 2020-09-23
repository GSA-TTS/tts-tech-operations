require("dotenv").config();

const countBy = require("lodash.countby");
const fs = require("fs");
const path = require("path");
const { graphql } = require("@octokit/graphql");
const { WebClient } = require("@slack/web-api");

// both are needed, since search is only possible with a user token (https://api.slack.com/methods/search.messages#facts) but we want messages to come from the bot
const slackUserClient = new WebClient(process.env.SLACK_USER_TOKEN);
const slackBotClient = new WebClient(process.env.SLACK_BOT_TOKEN);

const queryPath = path.join(__dirname, "repos.graphql");
const repoQuery = fs.readFileSync(queryPath, "utf8");

const isDryRun = process.argv.some((arg) => arg === "--dry-run");

const fetchRepos = (org, cursor) =>
  graphql(repoQuery, {
    org,
    cursor,
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

const hasOpenAlerts = (repo) =>
  repo.vulnerabilityAlerts.nodes.some((alert) => !alert.dismissedAt);

const isVulnerable = (repo) => !repo.isArchived && hasOpenAlerts(repo);

async function* fetchVulnerableRepos(org) {
  // paginate
  let cursor = null;

  while (true) {
    const results = await fetchRepos(org, cursor);
    const { nodes, pageInfo } = results.organization.repositories;

    for (const repo of nodes) {
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

const isViableChannel = (channel) =>
  // only channels the bot can join
  channel.is_channel &&
  !channel.is_archived &&
  // exclude *-public channels
  !channel.name.endsWith("-public") &&
  // aggregator channels
  !channel.name.endsWith("-pull-requests");

const getPrimaryChannel = async (query) => {
  const result = await slackUserClient.search.messages({
    query,
    sort: "timestamp",
  });

  const matches = result.messages.matches.filter(
    (match) => !isViableChannel(match.channel)
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
  if (hasOpenAlerts(repo)) {
    steps.push(`fix the outstanding <${url}/network/alerts|alerts>`);
  }
  const joinedSteps = steps.join(", then ");

  return `:wave: The <${url}|${repo.nameWithOwner}> repository has possible security vulnerabilities in its dependencies :kevin-home-alone-scream: To resolve,

:captain-planet: ${joinedSteps}, or
:han-solo-frozen: <https://handbook.tts.gsa.gov/github/#archiving|archive the repository>

Reach out to <#${adminsGitHubID}> with any questions :octocat: Thanks!`;
};

const postMessage = (channel, text) => {
  if (isDryRun) {
    console.log(`#${channel} - ${text}`);
    return; // TODO promise
  }

  return slackBotClient.chat.postMessage({
    channel,
    text,
    link_names: true,
    unfurl_links: false,
    unfurl_media: false,
  });
};

const notifyChannel = async (channel, repo) => {
  const text = generateMessage(repo);

  await slackBotClient.conversations.join({ channel });
  await postMessage(channel, text);
};

const notifyAboutUnknownChannel = (repo) => {
  const url = repoToUrl(repo);
  const text = `<${url}|${repo.nameWithOwner}> has vulnerabilities, but I wasn't able to find a corresponding channel.`;

  return postMessage("#admins-github", text);
};

const handleVulnerabilities = async (repo) => {
  const url = repoToUrl(repo);
  // exclude some channels
  // https://webapps.stackexchange.com/a/123207/18771
  const channel = await getPrimaryChannel(
    `${url} -in:transient -in:admins-github`
  );

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

// https://nodejs.org/docs/latest/api/modules.html#modules_accessing_the_main_module
if (require.main === module) {
  run();
} else {
  // for tests
  module.exports = {
    isVulnerable,
    getMostFrequentValue,
    generateMessage,
    isViableChannel,
  };
}
