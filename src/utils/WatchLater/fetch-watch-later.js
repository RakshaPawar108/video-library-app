import { fetchWatchLaterService } from "../../services";

export const fetchWatchLater = async (watchLaterDispatch, token) => {
  try {
    const res = await fetchWatchLaterService(token);
    if (res.status === 200) {
      watchLaterDispatch({
        type: "FETCH_INITIAL_WATCH_LATER",
        payload: res.data.watchlater,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
