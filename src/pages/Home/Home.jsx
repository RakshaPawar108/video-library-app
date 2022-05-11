import { VideoCard, SideNav } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <SideNav />
      <div className="videos-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};
