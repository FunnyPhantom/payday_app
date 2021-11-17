import { Middleware, SlackEventMiddlewareArgs } from "@slack/bolt/dist/types";

export type SlackMessageMiddleware = Middleware<
  SlackEventMiddlewareArgs<"message">
>;

export type SlackEventMiddleware<EventType extends string = string> =
  Middleware<SlackEventMiddlewareArgs<EventType>>;
