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

const run = async () => {
  const org = "18F";
  const repos = await fetchVulnerableRepos(org);
  console.log(repos);

  repos.forEach(async (repo) => {
    const result = await web.search.messages({
      query: `https://github.com/${org}/${repo}`,
    });
    console.log(result.messages.matches);

    const counts = countBy(result.messages.matches, "channel.name");
    console.log(counts);
  });
};

run();
