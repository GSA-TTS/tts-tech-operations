require("dotenv").config();

const countBy = require("lodash.countby");
const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

const run = async () => {
  const result = await web.search.messages({
    query: "https://github.com/18F/ReVAL",
  });
  console.log(result.messages.matches);

  const counts = countBy(result.messages.matches, "channel.name");
  console.log(counts);
};

run();
