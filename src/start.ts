import "scripts";
import { default as mongoose } from "mongoose";
import { appInstance } from "server";
import { EnvVars } from "utils";
import { initializeHandlers } from "handlers";
import { initMongoose } from "./scripts";

initializeHandlers(appInstance);

const startServer = async () => {
  await initMongoose(mongoose).then(() => {
    console.log("Mongoose has been initialized");
  });
  await appInstance.start(EnvVars.SLACK_APP_PORT).then(() => {
    console.log(`Slack App is running at port ${EnvVars.SLACK_APP_PORT}`);
  });
};

startServer().finally();
