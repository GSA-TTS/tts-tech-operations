const { paginate } = require("./slack");
const guests = require("./guests");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Iterating_Sets
const diff = (set1, set2) => new Set([...set1].filter((x) => !set2.has(x)));

const run = async () => {
  const guestIDs = await guests.getGuestIDs();
  const presentGuestIDs = new Set();

  for await (const channel of guests.getPublicChannels()) {
    const members = paginate("conversations.members", "members", {
      channel: channel.id,
    });
    for await (const member of members) {
      // console.log(member);
      presentGuestIDs.add(member.id);
    }
  }

  const userIDsNotInChannels = diff(guestIDs, presentGuestIDs);
  console.log(userIDsNotInChannels);
};

run();
