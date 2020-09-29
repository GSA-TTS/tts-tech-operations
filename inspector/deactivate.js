const { botClient } = require("./slack");
const guests = require("./guests");

const run = async () => {
  const guestIDs = await guests.getGuestIDs();

  // do in serial to avoid rate limits
  for (const id of guestIDs) {
    const result = await botClient.users.conversations({
      user: id,
      limit: 1,
    });
    if (result.channels.length === 0) {
      console.log(id);
    }
  }
};

run();
