import { App } from "@slack/bolt";
import { Actions } from "./actions";

const initActionHandlers = (app: App) => {
  app.action(Actions.submit_btc_address, async (args) => {
    console.log(args);
    await args.ack();
  });
};

export { initActionHandlers };
