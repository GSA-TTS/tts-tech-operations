import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
import { URLSearchParams } from "url";

const USER = "afeld_gsa";

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

  const response = await fetch(`https://api.trello.com/1${endpoint}?${params}`);

  if (!response.ok) {
    const body = await response.text();
    console.error(body);
    throw body;
  }

  return response.json();
};

const getOrgs = async () => {
  const orgs = await trelloRequest(`/members/${USER}/organizations`);
  const enterpriseOrgs = orgs.filter((org) => org.idEnterprise);

  const orgNames = enterpriseOrgs.map((org) => org.displayName);
  console.log(orgNames);

  return enterpriseOrgs;
};

const cleanBoards = async (org) => {
  const boards = await trelloRequest(`/organizations/${org.id}/boards`);
  console.log(boards);
};

const orgs = await getOrgs();
for (const org of orgs) {
  cleanBoards(org);
}
