import "./VideoCard.css";

export const VideoCard = () => {
  return (
    <div className="card video-card">
      <div className="image-container card-thumbnail">
        <img src="https://picsum.photos/300" alt="" />
        <span className="video-time">1:00</span>
      </div>
      <div className="content-container video-content">
        <figure className="avatar avatar-sm">
          <img src="https://picsum.photos/300" alt="" className="avatar-img" />
        </figure>
        <div className="video-details">
          <h2 className="video-title">Video Title</h2>
          <h4 className="video-channel">Channel Name</h4>
          <div className="video-data">
            <span>1M Views |</span>
            <span> 375k Likes</span>
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
