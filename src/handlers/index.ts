import { App } from "@slack/bolt";
import { initViewHandlers } from "./viewHandlers";
import { initMessageHandlers } from "./messageHandlers";
import { initActionHandlers } from "./actionHandlers";

const initializeHandlers = (app: App) => {
  initViewHandlers(app);
  initMessageHandlers(app);
  initActionHandlers(app);
};

export { initializeHandlers };
