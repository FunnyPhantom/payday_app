import "scripts";
import { appInstance } from "./server";
import { EnvVars } from "./uitls/EnvVars";
import { initializeHandlers } from "handlers";

initializeHandlers(appInstance);

const startServer = async () => {
  await appInstance.start(EnvVars.SLACK_APP_PORT);
  console.log(`Slack App is running at port ${EnvVars.SLACK_APP_PORT}`);
};

startServer().finally();
