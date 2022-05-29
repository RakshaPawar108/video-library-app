import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SideNav } from "../../components";
import ReactPlayer from "react-player/youtube";
import "./SingleVideo.css";
import { getVideo } from "../../utils";

export const SingleVideo = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    getVideo(params._id, setVideo, setLoading);
  }, [params._id]);

  return (
    <div className="single-video-wrapper">
      <SideNav />
      {loading ? (
        "Loading"
      ) : (
        <div className="videos-container">
          <ReactPlayer
            className="video-player"
            url={`https://www.youtube.com/watch?v=${video._id}`}
            controls={true}
          />

          <div className="video-details-container">
            <h3 className="single-video-title">{video.title}</h3>
            <div className="single-video-details">
              <h4 className="single-video-subdetails">
                {video.numViews} views | {video.numLikes} likes
              </h4>
              <div className="action-buttons-container">
                <button
                  className="button btn-float btn-primary s-like-button"
                  title="Like Video"
                >
                  <i className="far fa-thumbs-up like-icon"></i>
                </button>
                <button
                  className="button btn-float btn-primary s-watchlater-button"
                  title="Add to Watch Later"
                >
                  <i className="far fa-clock wl-icon"></i>
                </button>
                <button
                  className="button btn-float btn-primary s-playlist-button"
                  title="Add to Playlist"
                >
                  <i className="fas fa-list playlist-icon"></i>
                </button>
              </div>
            </div>
          </div>
          <hr className="divider" />
          <div className="other-details-container">
            <figure className="avatar avatar-sm single-channel-img">
              <img
                src={video.channelImg}
                alt={video.channelName}
                className="s-avatar-img"
              />
            </figure>
            <div className="other-details">
              <h4 className="single-video-channel" title={video.channelName}>
                {video.channelName}
              </h4>
              <p className="video-desc">{video.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
