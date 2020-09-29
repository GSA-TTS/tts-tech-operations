const axios = require("axios").default;
const delay = require("delay");
const { botClient } = require("./slack");
const guests = require("./guests");

const THIRTY_DAYS_AGO = Date.now() / 1000 - 60 * 60 * 24 * 30;

const shouldDeactivate = async (user) => {
  // there isn't a good way to see if they were recently invited (outside of Enterprise Grid), so just go based on their update time
  if (user.updated > THIRTY_DAYS_AGO) {
    return false;
  }

  const result = await botClient.users.conversations({
    user: user.id,
    limit: 1,
  });

  if (result.channels.length === 0) {
    // single-channel guest that was presumably in a channel that has been archived
    return true;
  }

  return false;
};

const deactivate = (userID) =>
  axios.delete(`https://api.slack.com/scim/v1/Users/${userID}`, {
    headers: { Authorization: `Bearer ${process.env.SLACK_USER_TOKEN}` },
  });

const run = async () => {
  const guestsByID = await guests.getGuestsByID();

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

run();
