import { useState, useEffect } from "react";
import { useAuth, useLikes, useWatchLater } from "../../../context";
import { addToWatchLater, likeVideo, unlikeVideo } from "../../../utils";
import { useNavigate } from "react-router-dom";
import "./VideoCard.css";

export const VideoCard = ({
  _id,
  title,
  videoThumbnail,
  channelName,
  channelImg,
  numLikes,
  numViews,
  videoTime,
  videos,
}) => {
  const {
    authState: { token },
  } = useAuth();
  const navigate = useNavigate();
  const {
    likesState: { likes },
    likesDispatch,
  } = useLikes();
  const {
    watchLaterState: { watchlater },
    watchLaterDispatch,
  } = useWatchLater();
  const [liked, setLiked] = useState(false);
  const [watchLater, setWatchLater] = useState(false);

  const likeHandler = (_id) => {
    if (token) {
      const video = videos.find((video) => video._id === _id);
      likeVideo(token, video, likesDispatch, setLiked);
    } else {
      navigate("/login");
    }
  };

  const unlikeHandler = (_id) => {
    unlikeVideo(_id, token, likesDispatch, setLiked);
  };

  const isLiked = (_id) => {
    likes.find((video) => video._id === _id) ? setLiked(true) : setLiked(false);
  };

  const addToWatchLaterHandler = (_id) => {
    if (token) {
      const video = videos.find((video) => video._id === _id);
      addToWatchLater(token, video, watchLaterDispatch, setWatchLater);
    }
  };

  useEffect(() => {
    isLiked(_id);
  });

  return (
    <div className="card video-card">
      <div className="image-container card-thumbnail">
        <img src={videoThumbnail} alt="" />
        <span className="video-time">{videoTime}</span>
      </div>
      <div className="content-container video-content">
        <figure className="avatar avatar-sm channel-img">
          <img src={channelImg} alt="" className="avatar-img" />
        </figure>
        <div className="video-details">
          <h2 className="video-title" title={title}>
            {title}
          </h2>
          <h4 className="video-channel" title={channelName}>
            {channelName}
          </h4>
          <div className="video-data">
            <span>{numViews} Views |</span>
            <span> {numLikes} Likes</span>
          </div>
        </div>
      </div>
      <div className="action-items-container">
        <div className="icon-container">
          {liked ? (
            <button
              className="button btn-float btn-primary like-button"
              title="Unlike Video"
              onClick={() => unlikeHandler(_id)}
            >
              <i className="fas fa-thumbs-up like-icon"></i>
            </button>
          ) : (
            <button
              className="button btn-float btn-primary like-button"
              title="Like Video"
              onClick={() => likeHandler(_id)}
            >
              <i className="far fa-thumbs-up like-icon"></i>
            </button>
          )}

          {watchLater ? (
            <button
              className="button btn-float btn-primary watchlater-button"
              title="Remove from Watch Later"
            >
              <i className="fas fa-clock wl-icon"></i>
            </button>
          ) : (
            <button
              className="button btn-float btn-primary watchlater-button"
              title="Add to Watch Later"
              onClick={() => addToWatchLaterHandler(_id)}
            >
              <i className="far fa-clock wl-icon"></i>
            </button>
          )}

          <button
            className="button btn-float btn-primary playlist-button"
            title="Add to Playlist"
          >
            <i className="fas fa-list playlist-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
