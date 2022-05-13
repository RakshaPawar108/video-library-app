import { fetchVideos } from "../../services/";
export const getVideos = async (setVideos) => {
  try {
    const res = await fetchVideos();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
