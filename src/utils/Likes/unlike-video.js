import { removeLikesService } from "../../services";

export const unlikeVideo = async (_id, token, likesDispatch) => {
  try {
    const res = await removeLikesService(_id, token, likesDispatch);
    if (res.status === 200) {
      likesDispatch({ type: "REMOVE_FROM_LIKES", payload: res.data.likes });
    }
  } catch (err) {
    console.log(err);
  }
};
