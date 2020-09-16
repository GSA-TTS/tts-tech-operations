require("dotenv").config();

const countBy = require("lodash.countby");
const fs = require("fs");
const { graphql } = require("@octokit/graphql");
const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const repoQuery = fs.readFileSync("./repos.graphql", "utf8");

const fetchRepos = (org) =>
  graphql(repoQuery, {
    org,
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

const isVulnerable = (repo) =>
  !repo.isArchived && repo.vulnerabilityAlerts.totalCount > 0;

async function* fetchVulnerableRepos(org) {
  const results = await fetchRepos(org);
  for (const edge of results.organization.repositories.edges) {
    const repo = edge.node;
    if (isVulnerable(repo)) {
      yield repo.url;
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
    const channel = await getPrimaryChannel(repo);
    console.log(`${repo}/network/alerts`, "-", `#${channel}`);
  }
};

run();
