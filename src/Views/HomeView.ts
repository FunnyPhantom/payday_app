import { View } from "@slack/bolt";
import { Actions } from "handlers/actionHandlers/actions";

const homeView = (): View => ({
  type: "home",
  blocks: [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Welcome to Payday Bot!",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: "In here you can specify a BTC address, and whenever some amount of btc gets to your address, it will notify you about it!",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      dispatch_action: true,
      type: "input",
      element: {
        initial_value: "",
        type: "plain_text_input",
        action_id: Actions.submit_btc_address,
        placeholder: {
          type: "plain_text",
          text: "Input BTC address",
        },
      },
      label: {
        type: "plain_text",
        text: "BTC Address",
        emoji: true,
      },
    },
  ],
});

export { homeView };
