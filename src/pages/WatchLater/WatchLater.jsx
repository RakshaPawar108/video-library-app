import "./WatchLater.css";
import { HorizontalVideoCard, PageSidePiece, SideNav } from "../../components";

export const WatchLater = () => {
  return (
    <div className="watch-later-wrapper">
      <SideNav />
      <div className="videos-container">
        <PageSidePiece pageTitle="Watch Later" numVideos="0" />
        <ul className="list list-stacked videos-list">
          <li className="list-item stacked">
            <HorizontalVideoCard
              videoId="ID"
              videoThumbnail="https://picsum.photos/300"
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
