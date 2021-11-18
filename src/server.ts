import { App } from "@slack/bolt";
import { EnvVars } from "utils";

const appInstance = new App({
  token: EnvVars.SLACK_APP_BOT_TOKEN,
  signingSecret: EnvVars.SLACK_APP_SIGNING_SECRET,
  socketMode: true,
  appToken: EnvVars.SLACK_APP_TOKEN,
});

export { appInstance };
