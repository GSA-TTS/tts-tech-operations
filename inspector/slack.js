require("dotenv").config();

const { WebClient } = require("@slack/web-api");

// both are needed, since search is only possible with a user token (https://api.slack.com/methods/search.messages#facts) but we want messages to come from the bot
module.exports = {
  userClient: new WebClient(process.env.SLACK_USER_TOKEN),
  botClient: new WebClient(process.env.SLACK_BOT_TOKEN),
};
