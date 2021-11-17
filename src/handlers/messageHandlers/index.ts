import { App } from "@slack/bolt";
import { pingHandler } from "./ping";

const initMessageHandlers = (app: App) => {
  app.message("ping", pingHandler);
};

export { initMessageHandlers };
