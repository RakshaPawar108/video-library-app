import axios from "axios";

export const likesService = (token, video) =>
  axios.post(
    "/api/user/likes/",
    { video },
    { headers: { authorization: token } }
  );
