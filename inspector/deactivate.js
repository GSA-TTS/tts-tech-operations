const axios = require("axios").default;
const delay = require("delay");
const { botClient } = require("./slack");
const guests = require("./guests");

const THIRTY_DAYS_AGO = Date.now() / 1000 - 60 * 60 * 24 * 30;

const run = async () => {
  const guestsByID = await guests.getGuestsByID();

  // do in serial to avoid rate limits
  for (const id in guestsByID) {
    const result = await botClient.users.conversations({
      user: id,
      limit: 1,
    });

    if (result.channels.length === 0) {
      const user = guestsByID[id];
      // there isn't a good way to see if they were recently invited, so just go based on the updated time
      if (user.updated < THIRTY_DAYS_AGO) {
        console.log(id, user.profile.real_name);
        await axios.delete(`https://api.slack.com/scim/v1/Users/${id}`, {
          headers: { Authorization: `Bearer ${process.env.SLACK_USER_TOKEN}` },
        });
      }
    }

    await delay(100);
  }
};

run();
