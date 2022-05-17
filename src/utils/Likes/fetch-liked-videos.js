import { fetchLikesService } from "../../services";

export const fetchLikedVideos = async (likesDispatch, token) => {
  try {
    const res = await fetchLikesService(token);
    if (res.status === 200) {
      likesDispatch({ type: "FETCH_INITIAL_LIKED", payload: res.data.likes });
    }
  } catch (err) {
    console.log(err);
  }
};
