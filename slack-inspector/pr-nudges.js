require("dotenv").config();

const countBy = require("lodash.countby");
const { graphql } = require("@octokit/graphql");
const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const fetchRepos = (org) =>
  graphql(
    `
      query lastIssues($org: String!) {
        organization(login: $org) {
          repositories(first: 10) {
            edges {
              node {
                name
                isArchived
                vulnerabilityAlerts {
                  totalCount
                }
              }
            }
          }
        }
      }
    `,
    {
      org,
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

const fetchVulnerableRepos = async (org) => {
  const results = await fetchRepos(org);
  const repos = results.organization.repositories.edges.map(
    (edge) => edge.node
  );

  const vulnerableRepos = repos.filter(
    (repo) => !repo.isArchived && repo.vulnerabilityAlerts.totalCount > 0
  );

  return vulnerableRepos.map((repo) => repo.name);
};

const getMostFrequentValue = (objects, prop) => {
  const counts = countBy(objects, prop);
  // https://stackoverflow.com/a/27376421/358804
  return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
};

const getPrimaryChannel = async (query) => {
  const result = await web.search.messages({ query });
  return getMostFrequentValue(result.messages.matches, "channel.name");
};

const run = async () => {
  const org = "18F";
  const repos = await fetchVulnerableRepos(org);

  repos.forEach(async (repo) => {
    const url = `https://github.com/${org}/${repo}`;
    const channel = await getPrimaryChannel(url);
    console.log(url, "-", `#${channel}`);
  });
};

run();
