import { Middleware, SlackEventMiddlewareArgs } from "@slack/bolt/dist/types";

export type SlackMessageMiddleware = Middleware<
  SlackEventMiddlewareArgs<"message">
>;
