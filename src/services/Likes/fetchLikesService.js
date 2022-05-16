import axios from "axios";

export const fetchLikesService = (token) => axios.get('/api/user/likes', {headers:{ authorization: token }})