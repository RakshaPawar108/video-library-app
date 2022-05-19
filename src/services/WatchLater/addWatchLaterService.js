import axios from "axios";

export const addWatchLaterService = (token, video) => axios.post('/api/user/watchlater', {video}, {headers:{ authorization: token }})