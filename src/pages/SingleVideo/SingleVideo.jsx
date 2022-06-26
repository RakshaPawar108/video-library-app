import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SideNav } from "../../components";
import ReactPlayer from "react-player/youtube";
import "./SingleVideo.css";
import {
  getVideo,
  likeVideo,
  unlikeVideo,
  addToWatchLater,
  removeFromWatchLater,
} from "../../utils";
import { useAuth, useLikes, useWatchLater } from "../../context";

export const SingleVideo = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [watchLater, setWatchLater] = useState(false);

  const {
    authState: { token },
  } = useAuth();
  const {
    likesState: { likes },
    likesDispatch,
  } = useLikes();
  const {
    watchLaterState: { watchlater },
    watchLaterDispatch,
  } = useWatchLater();
  const navigate = useNavigate();
  const params = useParams();

  const likeHandler = (_id) => {
    if (token) {
      likeVideo(token, video, likesDispatch, setLiked);
    } else {
      navigate("/login");
    }
  };

  const unlikeHandler = (_id) => {
    unlikeVideo(_id, token, likesDispatch, setLiked);
  };

  const addToWatchLaterHandler = (_id) => {
    if (token) {
      addToWatchLater(token, video, watchLaterDispatch, setWatchLater);
    } else {
      navigate("/login");
    }
  };

  const removeFromWatchLaterHandler = (_id) => {
    removeFromWatchLater(_id, token, watchLaterDispatch, setWatchLater);
  };

  useEffect(() => {
    getVideo(params._id, setVideo, setLoading);
    const isLiked = (_id) => {
      likes.find((video) => video._id === _id)
        ? setLiked(true)
        : setLiked(false);
    };
    const inWatchLater = (_id) => {
      watchlater.find((video) => video._id === _id)
        ? setWatchLater(true)
        : setWatchLater(false);
    };

    isLiked(params._id);
    inWatchLater(params._id);
  }, [params._id, likes, watchlater]);

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
                {liked ? (
                  <button
                    className="button btn-float btn-primary like-button"
                    title="Unlike Video"
                    onClick={() => unlikeHandler(video._id)}
                  >
                    <i className="fas fa-thumbs-up like-icon"></i>
                  </button>
                ) : (
                  <button
                    className="button btn-float btn-primary like-button"
                    title="Like Video"
                    onClick={() => likeHandler(video._id)}
                  >
                    <i className="far fa-thumbs-up like-icon"></i>
                  </button>
                )}
                {watchLater ? (
                  <button
                    className="button btn-float btn-primary watchlater-button"
                    title="Remove from Watch Later"
                    onClick={() => removeFromWatchLaterHandler(video._id)}
                  >
                    <i className="fas fa-clock wl-icon"></i>
                  </button>
                ) : (
                  <button
                    className="button btn-float btn-primary watchlater-button"
                    title="Add to Watch Later"
                    onClick={() => addToWatchLaterHandler(video._id)}
                  >
                    <i className="far fa-clock wl-icon"></i>
                  </button>
                )}
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
