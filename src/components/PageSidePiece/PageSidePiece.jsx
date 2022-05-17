import "./PageSidePiece.css";
import { videoFilesImg } from "../../assets";

export const PageSidePiece = ({ pageTitle, numVideos }) => {
  return (
    <section className="sidepiece-wrapper">
      <div className="sidepiece-image-container">
        <img src={videoFilesImg} alt="video-files" className="img-responsive" />
      </div>
      <div className="sidepiece-info-container">
        <h3 className="sidepiece-title">{pageTitle}</h3>
        <h4 className="sidepiece-sub-title">{numVideos} Videos</h4>
      </div>
    </section>
  );
};
