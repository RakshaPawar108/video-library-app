import { addWatchLaterService } from "../../services";

export const addToWatchLater = async (
  token,
  video,
  watchLaterDispatch,
  setWatchLater
) => {
  try {
    const res = await addWatchLaterService(token, video);
    if (res.status === 201) {
      watchLaterDispatch({
        type: "ADD_TO_WATCH_LATER",
        payload: res.data.watchlater,
      });
      setWatchLater(true);
    }
  } catch (err) {
    console.log(err);
  }
};
