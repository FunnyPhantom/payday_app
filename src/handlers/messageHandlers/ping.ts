import { SlackMessageMiddleware } from "types";

export const pingHandler: SlackMessageMiddleware = async ({ message, say }) => {
  if ("user" in message) {
    await say(`Pong! ${message.user!}`);
  }
  await say(JSON.stringify(message));
};
