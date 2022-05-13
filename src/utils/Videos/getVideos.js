import { fetchVideos } from "../../services/";
export const getVideos = async (setVideos) => {
  try {
    const res = await fetchVideos();
    if (res.status === 200) {
      setVideos(res.data.videos);
    } else {
      console.log("ERROR:", res);
    }
  } catch (err) {
    console.log(err);
  }
};
