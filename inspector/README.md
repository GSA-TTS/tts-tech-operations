# TTS Inspector

![logo](logo.png)

The Inspector is a bot that helps automate work for the Tech Portfolio. Currently, it finds open security vulnerabilities across TTS repositories and sends nudges in Slack. It looks for the Slack channel where the repository has been shared the most, as a best guess at finding the people most likely to fix it. This avoids needing a manually-maintained mapping between repositories and Slack channels.

## Usage

1. Set up the credentials.

   1. Create a `.env` file in this directory with the following content:

      ```ini
      SLACK_USER_TOKEN=xoxp-…
      SLACK_BOT_TOKEN=xoxb-…
      GITHUB_TOKEN=…
      ```

   1. From [the Slack app](https://api.slack.com/apps/A01B3MX46JC/install-on-team):
      - Copy the `OAuth Access Token` to the `SLACK_USER_TOKEN`
      - Copy the `Bot User OAuth Access Token` to the `SLACK_BOT_TOKEN`
   1. [Create a GitHub personal access token](https://github.com/settings/tokens) and copy it to the `GITHUB_TOKEN`.

1. [Install Node.js.](https://nodejs.org/en/download/package-manager/#macos)
1. Go to this directory in the Terminal.
1. Install the dependencies.

   ```sh
   npm i
   ```

1. Run the script.

   ```sh
   node pr-nudges.js
   ```

For testing purposes, it can also be run without posting to channels.

```sh
node pr-nudges.js --dry-run
```
