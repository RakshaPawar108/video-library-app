import { removeWatchLaterService } from "../../services";

export const removeFromWatchLater = async (
  _id,
  token,
  watchLaterDispatch,
  setWatchLater
) => {
  try {
    const res = await removeWatchLaterService(_id, token);
    if (res.status === 200) {
      watchLaterDispatch({
        type: "REMOVE_FROM_WATCH_LATER",
        payload: res.data.watchlater,
      });
    }

    setWatchLater(false);
  } catch (err) {
    console.log(err);
  }
};
