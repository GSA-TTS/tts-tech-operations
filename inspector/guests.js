require("dotenv").config();

const sortBy = require("lodash.sortby");
const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const getGuestIDs = async () => {
  const guestIDs = new Set();
  for await (const usersPage of web.paginate("users.list")) {
    for (const user of usersPage.members) {
      // a.k.a. single-channel guest
      if (user.is_ultra_restricted) {
        guestIDs.add(user.id);
      }
    }
  }
  return guestIDs;
};

const getNumGuests = async (channelID, allGuestIDs) => {
  let numGuests = 0;

  const memberPages = web.paginate("conversations.members", {
    channel: channelID,
  });

  for await (const memberPage of memberPages) {
    for (const memberID of memberPage.members) {
      if (allGuestIDs.has(memberID)) {
        numGuests += 1;
      }
    }
  }

  return numGuests;
};

const getChannelInfo = async () => {
  const guestIDs = await getGuestIDs();
  const channels = [];

  const conversationPages = web.paginate("conversations.list", {
    exclude_archived: true,
    types: "public_channel",
  });

  for await (const conversationPage of conversationPages) {
    for (const channel of conversationPage.channels) {
      let numGuests;

      try {
        numGuests = await getNumGuests(channel.id, guestIDs);
      } catch (err) {
        console.error(`Failed to fetch members for ${channel.name}`);
        // console.error(err);
      }

      if (numGuests > 0) {
        channels.push({
          name: channel.name,
          num_guests: numGuests,
        });
      }
    }
  }

  return channels;
};

(async () => {
  const channels = await getChannelInfo();
  sortBy(channels, ["num_guests"]).forEach((channel) =>
    console.log(channel.name, channel.num_guests)
  );
})();
