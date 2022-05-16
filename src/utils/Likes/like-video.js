import { likesService } from "../../services";

export const likeVideo = async (token, video) => {
  try {
    const res = await likesService(token, video);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
