require("dotenv").config();

const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

async function fetchConversations() {
  const channels = [];

  // https://slack.dev/node-slack-sdk/web-api#pagination
  for await (const page of web.paginate("conversations.list")) {
    // merge results
    Array.prototype.push.apply(channels, page.channels);
  }

  console.log(channels);
}

fetchConversations();
