import { SlackMessageMiddleware } from "../types";
import { pingHandler } from "./messageHandlers/ping";
import { App } from "@slack/bolt";

/*
    const stuff = {
      type: "modal",
      title: {
        type: "plain_text",
        text: "My App",
        emoji: true,
      },
      submit: {
        type: "plain_text",
        text: "Submit",
        emoji: true,
      },
      close: {
        type: "plain_text",
        text: "Cancel",
        emoji: true,
      },
      blocks: [
        {
          type: "input",
          element: {
            type: "plain_text_input",
            placeholder: {
              type: "plain_text",
              text: "BTC addresss",
            },
          },
          label: {
            type: "plain_text",
            text: "Input BTC address",
            emoji: false,
          },
        },
      ],
    };

 */

const promptBTCAddressHandler: SlackMessageMiddleware = async () => {};

const initializeHandlers = (appInstance: App) => {
  appInstance.message("ping", pingHandler);
};

export { initializeHandlers };
