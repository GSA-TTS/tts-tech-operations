require("dotenv").config();
const fetch = require("node-fetch");
const { URLSearchParams } = require("url");
const { DateTime } = require("luxon");

const { TRELLO_KEY, TRELLO_TOKEN } = process.env;

const trelloRequest = async (endpoint, extraParams = {}, fetchOpts = {}) => {
  if (!TRELLO_KEY) {
    throw new Error("TRELLO_KEY not set");
  }
  if (!TRELLO_TOKEN) {
    throw new Error("TRELLO_TOKEN not set");
  }

  const params = new URLSearchParams(extraParams);
  params.set("key", TRELLO_KEY);
  params.set("token", TRELLO_TOKEN);

  const url = `https://api.trello.com/1${endpoint}?${params}`;
  const response = await fetch(url, fetchOpts);

  if (!response.ok) {
    const body = await response.text();
    console.error(body);
    throw new Error(body);
  }

  return response.json();
};

const getOrgs = async () => {
  // https://stackoverflow.com/a/54444336/358804
  const orgs = await trelloRequest(`/members/me/organizations`);
  const enterpriseOrgs = orgs.filter((org) => org.idEnterprise);

  const orgNames = enterpriseOrgs.map((org) => org.displayName);
  console.log(`Checking Trello Workspaces:\n\t${orgNames.join("\n\t")}`);

  return enterpriseOrgs;
};

const shouldClose = (board) => {
  if (board.closed) {
    return false;
  }

  const lastActivity = DateTime.fromISO(board.dateLastActivity);
  const cutoff = DateTime.now().minus({ months: 6 });
  return lastActivity < cutoff;
};

const cleanBoards = async (org, apply = false) => {
  const boards = await trelloRequest(`/organizations/${org.id}/boards`);
  for (const board of boards) {
    if (shouldClose(board)) {
      // console.log(board);
      console.log(`"${board.name}","${board.url}"`);

      if (apply) {
        // close the boards syncronously so it's easier to troubleshoot if something goes wrong
        await trelloRequest(
          `/boards/${board.id}`,
          { closed: true },
          { method: "PUT" }
        );
      }
    }
  }
};

const run = async () => {
  const orgs = await getOrgs();
  const apply = process.argv.some((arg) => arg === "--apply");
  if (apply) {
    console.log("Archiving inactive boards:\n");
  } else {
    console.log("Would archive the following inactive boards:\n");
  }

  for (const org of orgs) {
    cleanBoards(org, apply);
  }
};

// https://nodejs.org/docs/latest/api/modules.html#modules_accessing_the_main_module
if (require.main === module) {
  run();
} else {
  // for tests
  module.exports = {
    shouldClose,
  };
}
