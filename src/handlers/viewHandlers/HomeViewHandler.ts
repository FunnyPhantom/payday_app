import { SlackEventMiddleware } from "types";
import { homeView } from "Views/HomeView";
import { User } from "Models";

enum HOME_TABS {
  HOME = "home",
  MESSAGES = "messages",
}

const homeViewHandler: SlackEventMiddleware<"app_home_opened"> = async ({
  event,
  client,
}) => {
  if (event.tab === HOME_TABS.HOME) {
    let currentUser = await User.findOne({ userId: event.user });
    const res = await client.views.publish({
      user_id: event.user,
      view: homeView(currentUser),
    });
    if (!currentUser) {
      await new User({
        userId: event.user,
        btcAddress: "",
        homeViewId: res.view?.id,
      }).save();
    }
  }
};

export { homeViewHandler };
