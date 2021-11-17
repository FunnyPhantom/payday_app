import { SlackEventMiddleware } from "types";
import { homeView } from "Views/HomeView";

enum HOME_TABS {
  HOME = "home",
  MESSAGES = "messages",
}

const homeViewHandler: SlackEventMiddleware<"app_home_opened"> = async ({
  event,
  client,
}) => {
  if (event.tab === HOME_TABS.HOME) {
    await client.views.publish({
      user_id: event.user,
      view: homeView(),
    });
  }
};

export { homeViewHandler };
