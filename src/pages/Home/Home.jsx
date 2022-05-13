import { SideNav, Videos } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <SideNav />
      <div className="videos-container">
        <Videos />
      </div>
    </div>
  );
};
