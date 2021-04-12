require("dotenv").config();
const fetch = require("node-fetch");
const { URLSearchParams } = require("url");
const { DateTime } = require("luxon");

const KEY = process.env.TRELLO_KEY;
if (!KEY) {
  throw "TRELLO_KEY not set";
}
const TOKEN = process.env.TRELLO_TOKEN;
if (!TOKEN) {
  throw "TRELLO_TOKEN not set";
}

const trelloRequest = async (endpoint, extraParams = {}) => {
  const params = new URLSearchParams(extraParams);
  params.set("key", KEY);
  params.set("token", TOKEN);

  const url = `https://api.trello.com/1${endpoint}?${params}`;
  const response = await fetch(url);

  if (!response.ok) {
    const body = await response.text();
    console.error(body);
    throw body;
  }

  return response.json();
};

const getOrgs = async () => {
  // https://stackoverflow.com/a/54444336/358804
  const orgs = await trelloRequest(`/members/me/organizations`);
  const enterpriseOrgs = orgs.filter((org) => org.idEnterprise);

  const orgNames = enterpriseOrgs.map((org) => org.displayName);
  console.log(orgNames);

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

const cleanBoards = async (org) => {
  const boards = await trelloRequest(`/organizations/${org.id}/boards`);
  for (const board of boards) {
    if (shouldClose(board)) {
      // console.log(board);
      console.log(`"${board.name}","${board.url}"`);
    }
  }
};

const run = async () => {
  const orgs = await getOrgs();
  for (const org of orgs) {
    cleanBoards(org);
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
