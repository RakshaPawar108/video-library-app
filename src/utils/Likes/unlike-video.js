import { removeLikesService } from "../../services";

export const unlikeVideo = async (_id, token, likesDispatch, setLiked) => {
  try {
    const res = await removeLikesService(_id, token, likesDispatch);
    if (res.status === 200) {
      likesDispatch({ type: "REMOVE_FROM_LIKES", payload: res.data.likes });
      setLiked(false);
    }
  } catch (err) {
    console.log(err);
  }
};
