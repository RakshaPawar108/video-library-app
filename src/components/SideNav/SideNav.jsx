import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  return (
    <aside className="sidenav-aside">
      <nav>
        <ul className="sidenav-items">
          <li className="sidenav-item">
            <NavLink to="/">
              <i class="fas fa-compass sidenav-icon"></i>
              Explore
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/liked">
              <i class="fas fa-thumbs-up sidenav-icon"></i>
              Liked
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/playlists">
              <i class="fas fa-list sidenav-icon"></i>
              Playlists
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/watch-later">
              <i class="fas fa-bookmark sidenav-icon"></i>
              Watch Later
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/history">
              <i class="fas fa-history sidenav-icon"></i>
              History
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { SideNav };
