require("dotenv").config();

const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

(async () => {
  const guestIDs = new Set();
  for await (const usersPage of web.paginate("users.list")) {
    for (const user of usersPage.members) {
      // a.k.a. single-channel guest
      if (user.is_ultra_restricted) {
        guestIDs.add(user.id);
      }
    }
  }

  const conversationPages = web.paginate("conversations.list", {
    exclude_archived: true,
    types: "public_channel",
  });

  for await (const conversationPage of conversationPages) {
    for (const channel of conversationPage.channels) {
      let numGuests = 0;

      const memberPages = web.paginate("conversations.members", {
        channel: channel.id,
      });

      try {
        for await (const memberPage of memberPages) {
          for (const memberID of memberPage.members) {
            if (guestIDs.has(memberID)) {
              numGuests += 1;
            }
          }
        }
      } catch (err) {
        console.error(`Failed to fetch members for ${channel.name}`);
        console.error(err);
      }

      if (numGuests > 0) {
        console.log(channel.name, numGuests);
      }
    }
  }
})();
