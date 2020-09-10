require("dotenv").config();

const { WebClient } = require("@slack/web-api");

const web = new WebClient(process.env.SLACK_BOT_TOKEN);

// https://api.slack.com/methods/conversations.list/code

// You probably want to use a database to store any conversations information ;)
let conversationsStore = {};

// Fetch conversations using the conversations.list method
async function fetchConversations() {
  try {
    // Call the conversations.list method using the built-in WebClient
    const result = await web.conversations.list();

    console.log(result);

    saveConversations(result.channels);
  } catch (error) {
    console.error(error);
  }
}

// Put conversations into the JavaScript object
function saveConversations(conversationsArray) {
  let conversationId = "";
  conversationsArray.forEach(function (conversation) {
    // Key conversation info on its unique ID
    conversationId = conversation["id"];

    // Store the entire conversation object (you may not need all of the info)
    conversationsStore[conversationId] = conversation;
  });
}

fetchConversations();
