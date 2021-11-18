import { cleanEnv, str, num } from "envalid";

const EnvVars = cleanEnv(process.env, {
  SLACK_APP_SIGNING_SECRET: str(),
  SLACK_APP_BOT_TOKEN: str(),
  SLACK_APP_TOKEN: str(),
  MONGO_CONNECTION_URL: str(),
  SLACK_APP_PORT: num({ default: 3000 }),
});

export { EnvVars };
