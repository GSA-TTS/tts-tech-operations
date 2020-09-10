require("dotenv").config();

const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const isPartnerChannel = (channel) =>
  /-(partners|prtnrs)$/i.test(channel.name_normalized) || channel.is_ext_shared;

const fetchConversations = async () => {
  const channels = [];

  // https://slack.dev/node-slack-sdk/web-api#pagination
  for await (const page of web.paginate("conversations.list")) {
    // merge results
    Array.prototype.push.apply(channels, page.channels);
  }

  channels.forEach((channel) => {
    if (isPartnerChannel(channel)) {
      console.log(channel.name_normalized);
    }
  });
};

fetchConversations();
