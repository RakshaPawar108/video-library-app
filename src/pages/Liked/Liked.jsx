import "./Liked.css";
import { useEffect, useState } from "react";
import { HorizontalVideoCard, PageSidePiece, SideNav } from "../../components";
import { useAuth, useLikes } from "../../context";
import { fetchLikedVideos, unlikeVideo } from "../../utils";

export const Liked = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    likesState: { likes },
    likesDispatch,
  } = useLikes();

  useEffect(() => {
    if (token) {
      fetchLikedVideos(likesDispatch, token);
    }
  });
  const [liked, setLiked] = useState(true);

  const removeFromLikes = (_id) => {
    unlikeVideo(_id, token, likesDispatch, setLiked);
  };

  return (
    <div className="liked-wrapper">
      <SideNav />
      <div className="videos-container">
        <PageSidePiece pageTitle="Liked Videos" numVideos={likes.length} />
        <ul className="list list-stacked videos-list">
          {likes.length > 0 ? (
            likes.map((likedVideo) => (
              <li className="list-item stacked" key={likedVideo._id}>
                <HorizontalVideoCard
                  videoId={likedVideo._id}
                  videoThumbnail={likedVideo.videoThumbnail}
                  videoTime={likedVideo.videoTime}
                  videoTitle={likedVideo.title}
                  channelName={likedVideo.channelName}
                  removeFromLikes={removeFromLikes}
                  liked={liked}
                />
              </li>
            ))
          ) : (
            <div className="no-video-div">
              You have not liked any videos yet
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
