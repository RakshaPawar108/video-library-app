import { likesService } from "../../services";

export const likeVideo = async (token, video, likesDispatch) => {
  try {
    const res = await likesService(token, video);
    if (res.status === 201) {
      likesDispatch({ type: "ADD_TO_LIKES", payload: res.data.likes });
      console.log(res.data.likes);
    }
  } catch (err) {
    console.log(err);
  }
};
