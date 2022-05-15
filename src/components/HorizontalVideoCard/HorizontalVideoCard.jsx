import "./HorizontalVideoCard.css";

export const HorizontalVideoCard = ({
  videoThumbnail,
  videoTime,
  videoTitle,
  channelName,
}) => {
  return (
    <div className="horizontal-video-card">
      <div className="horizontal-card-img-container">
        <img
          src={videoThumbnail}
          alt="video-thumbnail"
          className="img-responsive"
        />
        <span className="hr-video-time">{videoTime}</span>
      </div>

      <div className="horizontal-card-content-container">
        <h3 className="hc-video-title">{videoTitle}</h3>
        <h4 className="hc-channel-name">{channelName}</h4>
      </div>

      <div className="hc-button-container">
        <button className="button btn-secondary delete-button">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
