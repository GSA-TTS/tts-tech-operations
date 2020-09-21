require("dotenv").config();

const countBy = require("lodash.countby");
const fs = require("fs");
const { graphql } = require("@octokit/graphql");
const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

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
  const result = await web.search.messages({ query, sort: "timestamp" });
  return getMostFrequentValue(result.messages.matches, "channel.name");
};

const run = async () => {
  const org = "18F";
  const repos = fetchVulnerableRepos(org);
  for await (const repo of repos) {
    const channel = await getPrimaryChannel(repo.url);
    const numAlerts = repo.vulnerabilityAlerts.totalCount;
    console.log(
      `${repo.nameWithOwner} has ${numAlerts} dependency vulnerabilities. See ${repo.url}/network/alerts.`,
      "-",
      `#${channel}`
    );
  }
};

run();
