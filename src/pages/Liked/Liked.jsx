import "./Liked.css";
import { PageSidePiece, SideNav } from "../../components";

export const Liked = () => {
  return (
    <div className="liked-wrapper">
      <SideNav />
      <div className="videos-container">
        <PageSidePiece pageTitle="Liked Videos" numVideos="0" />
      </div>
    </div>
  );
};
