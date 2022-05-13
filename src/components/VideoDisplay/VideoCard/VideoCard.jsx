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
}) => {
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
          <h2 className="video-title" title={title}>{title}</h2>
          <h4 className="video-channel" title={channelName}>{channelName}</h4>
          <div className="video-data">
            <span>{numViews} Views |</span>
            <span> {numLikes} Likes</span>
          </div>
        </div>
      </div>
      <div className="action-items-container">
        <div className="icon-container">
          <button className="button btn-float btn-primary" title="Like Video">
            <i className="far fa-thumbs-up like-icon"></i>
          </button>
          <button
            className="button btn-float btn-primary"
            title="Add to Watch Later"
          >
            <i className="far fa-clock wl-icon"></i>
          </button>
          <button
            className="button btn-float btn-primary"
            title="Add to Playlist"
          >
            <i className="fas fa-list playlist-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
