import { VideoCard } from "../VideoCard/VideoCard";
import { useVideos } from "../../../context";

export const Videos = () => {
  const videos = useVideos();
  return (
    <>
      {videos.length > 0
        ? videos.map((video) => (
            <VideoCard key={video._id} {...video} videos={videos} />
          ))
        : null}
    </>
  );
};
