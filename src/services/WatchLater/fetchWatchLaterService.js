import axios from "axios";

export const fetchWatchLaterService = (token) =>
  axios.get("/api/user/watchlater", { headers: { authorization: token } });
