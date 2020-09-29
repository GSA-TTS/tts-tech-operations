require("dotenv").config();

const { WebClient } = require("@slack/web-api");

// both are needed, since search is only possible with a user token (https://api.slack.com/methods/search.messages#facts) but we want messages to come from the bot
const userClient = new WebClient(process.env.SLACK_USER_TOKEN);
const botClient = new WebClient(process.env.SLACK_BOT_TOKEN);

const paginate = async function* paginate(method, key, options) {
  options = options || {};
  const pages = botClient.paginate(method, options);

  for await (const page of pages) {
    for (const item of page[key]) {
      yield item;
    }
  }
};

module.exports = {
  userClient,
  botClient,
  paginate,
};
