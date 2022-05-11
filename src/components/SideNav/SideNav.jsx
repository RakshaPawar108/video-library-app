import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
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
            <NavLink to="/liked">
              <i className="fas fa-thumbs-up sidenav-icon"></i>
              Liked
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/playlists">
              <i className="fas fa-list sidenav-icon"></i>
              Playlists
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/watch-later">
              <i className="fas fa-clock sidenav-icon"></i>
              Watch Later
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/history">
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
