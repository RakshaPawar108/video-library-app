import axios from "axios";

export const removeLikesService = (_id, token) =>
  axios.delete(`/api/user/likes/${_id}`, { headers: { authorization: token } });
