import { App } from "@slack/bolt";
import { homeViewHandler } from "./HomeViewHandler";

const initViewHandlers = (app: App) => {
  app.event("app_home_opened", homeViewHandler);
};
export { initViewHandlers };
