const axios = require("axios").default;
const delay = require("delay");
const { botClient, paginate } = require("./slack");

// thirty days ago
const STALE_USER_CUTOFF = Date.now() / 1000 - 60 * 60 * 24 * 30;

const isSingleChannelGuest = (user) =>
  user.is_ultra_restricted && !user.deleted;

const getGuestsByID = async () => {
  const guestsByID = {};
  for await (const user of paginate("users.list", "members")) {
    if (isSingleChannelGuest(user)) {
      guestsByID[user.id] = user;
    }
  }
  return guestsByID;
};

const hasChannels = async (userID) => {
  const result = await botClient.users.conversations({
    user: userID,
    limit: 1,
  });

  return result.channels.length > 0;
};

const shouldDeactivate = async (user) => {
  // there isn't a good way to see if they were recently invited (outside of Enterprise Grid), so just go based on their update time
  if (user.updated > STALE_USER_CUTOFF) {
    return false;
  }

  // single-channel guest that was presumably in a channel that has been archived
  return !(await hasChannels(user.id));
};

const deactivate = (userID) =>
  axios.delete(`https://api.slack.com/scim/v1/Users/${userID}`, {
    headers: { Authorization: `Bearer ${process.env.SLACK_USER_TOKEN}` },
  });

const run = async () => {
  const guestsByID = await getGuestsByID();

  // do in serial with delays to avoid rate limits
  for (const id in guestsByID) {
    const user = guestsByID[id];
    const deactivateUser = await shouldDeactivate(user);
    if (deactivateUser) {
      console.log(id, user.profile.real_name);
      await deactivate(id);
      await delay(1000);
    }

    await delay(500);
  }
};

// https://nodejs.org/docs/latest/api/modules.html#modules_accessing_the_main_module
if (require.main === module) {
  run();
} else {
  // for tests
  module.exports = {
    shouldDeactivate,
  };
}