import { getVideoService } from "../../../services";

export const getVideo = async (_id) => {
  try {
    const res = await getVideoService(_id);
    if (res.status === 200) {
      // Do something. Don't know what yet...
      console.log(res.data.video);
    }
  } catch (err) {
    console.log(err);
  }
};
