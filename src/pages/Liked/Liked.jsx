import "./Liked.css";
import { HorizontalVideoCard, PageSidePiece, SideNav } from "../../components";

export const Liked = () => {
  return (
    <div className="liked-wrapper">
      <SideNav />
      <div className="videos-container">
        <PageSidePiece pageTitle="Liked Videos" numVideos="0" />
        <ul className="list list-stacked videos-list">
          <li className="list-item stacked">
            <HorizontalVideoCard
              videoThumbnail="https://picsum.photos/200"
              videoTime="1:00"
              videoTitle="Video Title"
              channelName="Channel Name"
            />
          </li>
          <li className="list-item stacked">
            <HorizontalVideoCard
              videoThumbnail="https://picsum.photos/200"
              videoTime="1:00"
              videoTitle="Video Title"
              channelName="Channel Name"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
