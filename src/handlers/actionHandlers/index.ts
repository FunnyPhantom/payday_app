import {
  App,
  BlockAction,
  PlainTextInputAction,
  SlackActionMiddlewareArgs,
} from "@slack/bolt";
import { Actions } from "./actions";
import { Middleware } from "@slack/bolt/dist/types";

const submitBtcAddress: Middleware<
  SlackActionMiddlewareArgs<BlockAction<PlainTextInputAction>>
> = async ({ ack, action, client, body, context, payload }) => {
  await ack();
};

const initActionHandlers = (app: App) => {
  app.action(Actions.submit_btc_address, submitBtcAddress);
};

export { initActionHandlers };
