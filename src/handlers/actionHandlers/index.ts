import {
  App,
  BlockAction,
  ButtonAction,
  PlainTextInputAction,
  SlackActionMiddlewareArgs,
} from "@slack/bolt";
import { Actions } from "./actions";
import { Middleware } from "@slack/bolt/dist/types";
import { User } from "Models";
import { homeView } from "Views/HomeView";
import { blockChainClient, OPS } from "../../io/BlockChainClient";

const handleSubscribe = (
  newAddress: string,
  oldAddress: string | undefined
) => {
  if (oldAddress) {
    console.log(`Unsubbed for ${oldAddress}`);
    blockChainClient.send({ op: OPS.ADDRESS_UNSUB, addr: oldAddress });
  }
  console.log(`Subbed to ${newAddress}`);
  blockChainClient.send({ op: OPS.ADDRESS_SUB, addr: newAddress });
};

const submitBtcAddress: Middleware<
  SlackActionMiddlewareArgs<BlockAction<PlainTextInputAction>>
> = async ({ ack, action, client, body, context, payload }) => {
  const currentUser = await User.findOne({ userId: body.user.id });
  if (currentUser) {
    handleSubscribe(payload.value, currentUser.btcAddress);
    currentUser.btcAddress = payload.value;
    await currentUser.save();
  }

  await ack();
  await client.views.update({
    view: homeView(currentUser),
    view_id: currentUser?.homeViewId,
  });
};

const toggleMemeMode: Middleware<
  SlackActionMiddlewareArgs<BlockAction<ButtonAction>>
> = async ({ ack, client, action, payload, body }) => {
  const isMemeMode = action.value === "true";
  const currentUser = await User.findOne({ userId: body.user.id });
  if (currentUser) {
    currentUser.isMemeMode = !isMemeMode;
    await currentUser.save();
  }
  await ack();
  await client.views.update({
    view_id: currentUser?.homeViewId,
    view: homeView(currentUser),
  });
};

const initActionHandlers = (app: App) => {
  app.action(Actions.submit_btc_address, submitBtcAddress);
  app.action(Actions.toggle_meme_mode, toggleMemeMode);
};

export { initActionHandlers };
