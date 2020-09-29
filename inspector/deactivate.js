const { botClient } = require("./slack");
const guests = require("./guests");

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
      console.log(id, user.profile.real_name, user.profile.email);
    }
  }
};

run();
