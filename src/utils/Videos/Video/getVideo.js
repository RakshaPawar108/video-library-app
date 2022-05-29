import { getVideoService } from "../../../services";

export const getVideo = async (_id, setVideo, setLoading) => {
  try {
    const res = await getVideoService(_id);
    if (res.status === 200) {
      setVideo(res.data.video);
    }
  } catch (err) {
    console.log(err);
  } finally{
    setLoading(false)
  }
};
