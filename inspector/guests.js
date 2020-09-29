const sortBy = require("lodash.sortby");
const { paginate } = require("./slack");

const getGuestIDs = async () => {
  const guestIDs = new Set();
  for await (const user of paginate("users.list", "members")) {
    // a.k.a. single-channel guest
    if (user.is_ultra_restricted) {
      guestIDs.add(user.id);
    }
  }
  return guestIDs;
};

async function* getPublicChannels() {
  const channels = paginate("conversations.list", "channels", {
    exclude_archived: true,
    types: "public_channel",
  });

  for await (const channel of channels) {
    yield channel;
  }
}

const getNumGuests = async (channelID, allGuestIDs) => {
  let numGuests = 0;

  const memberIDs = paginate("conversations.members", "members", {
    channel: channelID,
  });

  for await (const memberID of memberIDs) {
    if (allGuestIDs.has(memberID)) {
      numGuests += 1;
    }
  }

  return numGuests;
};

const getChannelInfo = async () => {
  const guestIDs = await getGuestIDs();
  const channels = [];

  for await (const channel of getPublicChannels()) {
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

  return channels;
};

const run = async () => {
  const channels = await getChannelInfo();
  sortBy(channels, ["num_guests"]).forEach((channel) =>
    console.log(channel.name, channel.num_guests)
  );
};

// https://nodejs.org/docs/latest/api/modules.html#modules_accessing_the_main_module
if (require.main === module) {
  run();
} else {
  module.exports = {
    getGuestIDs,
    getPublicChannels,
  };
}
