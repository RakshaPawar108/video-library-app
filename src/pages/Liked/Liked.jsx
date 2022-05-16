import "./Liked.css";
import { useEffect } from "react";
import { HorizontalVideoCard, PageSidePiece, SideNav } from "../../components";
import { useAuth, useLikes } from "../../context";
import { fetchLikedVideos } from "../../utils";

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
                  videoThumbnail={likedVideo.videoThumbnail}
                  videoTime={likedVideo.videoTime}
                  videoTitle={likedVideo.title}
                  channelName={likedVideo.channelName}
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
