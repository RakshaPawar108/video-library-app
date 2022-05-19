import axios from "axios";

export const removeWatchLaterService = (_id, token) =>
  axios.delete(`/api/user/watchlater/${_id}`, {
    headers: { authorization: token },
  });
