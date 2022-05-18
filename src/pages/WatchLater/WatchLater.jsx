import "./WatchLater.css";
import { HorizontalVideoCard, PageSidePiece, SideNav } from "../../components";
import { useAuth, useWatchLater } from "../../context";
import { removeFromWatchLater } from "../../utils";
import { useState } from "react";

export const WatchLater = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    watchLaterState: { watchlater },
    watchLaterDispatch,
  } = useWatchLater();

  const [watchLater, setWatchLater] = useState(true);

  const removeVidFromWatchLater = (_id) => {
    removeFromWatchLater(_id, token, watchLaterDispatch, setWatchLater);
  };
  return (
    <div className="watch-later-wrapper">
      <SideNav />
      <div className="videos-container">
        <PageSidePiece pageTitle="Watch Later" numVideos={watchlater.length} />
        <ul className="list list-stacked videos-list">
          {watchlater.length > 0 ? (
            watchlater.map((watchLaterVideo) => (
              <li className="list-item stacked" key={watchLaterVideo._id}>
                <HorizontalVideoCard
                  videoId={watchLaterVideo._id}
                  videoThumbnail={watchLaterVideo.videoThumbnail}
                  videoTime={watchLaterVideo.videoTime}
                  videoTitle={watchLaterVideo.title}
                  channelName={watchLaterVideo.channelName}
                  removeVideo={removeVidFromWatchLater}
                  watchlater={watchLater}
                />
              </li>
            ))
          ) : (
            <div className="no-video-div">
              You have not added any videos to Watch Later yet
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
