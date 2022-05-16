import { NavLink } from "react-router-dom";
import { useAuth } from "../../context";
import "./SideNav.css";

const SideNav = () => {
  const {
    authState: { token },
  } = useAuth();

  return (
    <aside className="sidenav-aside">
      <nav className="sidenav-navbar">
        <ul className="sidenav-items">
          <li className="sidenav-item">
            <NavLink to="/">
              <i className="fas fa-compass sidenav-icon"></i>
              Explore
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to={token ? "/liked" : "/login"}>
              <i className="fas fa-thumbs-up sidenav-icon"></i>
              Liked
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to={token ? "/playlists" : "/login"}>
              <i className="fas fa-list sidenav-icon"></i>
              Playlists
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to={token ? "/watch-later" : "/login"}>
              <i className="fas fa-clock sidenav-icon"></i>
              Watch Later
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to={token ? "/history" : "/login"}>
              <i className="fas fa-history sidenav-icon"></i>
              History
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { SideNav };
