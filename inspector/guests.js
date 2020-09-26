require("dotenv").config();

const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

(async () => {
  const conversationPages = web.paginate("conversations.list", {
    exclude_archived: true,
    types: "public_channel",
  });

  for await (const conversationPage of conversationPages) {
    for (const channel of conversationPage.channels) {
      console.log(channel.name);

      const memberPages = web.paginate("conversations.members", {
        channel: channel.id,
      });

      for await (const memberPage of memberPages) {
        for (const memberID of memberPage.members) {
          console.log(memberID);
        }
      }
    }
  }
})();
