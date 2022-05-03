import "./Header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <header className="header">
        <div className="navigation-brand">
          <Link to="/">Video Library</Link>
        </div>

        <div className="input-container outlined search-box">
          <input type="search" placeholder=" " />
          <label>Search</label>
        </div>

        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <label htmlFor="check" className="bar">
          <span className="fas fa-2x fa-bars navbar-open-btn"></span>
          <span className="far fa-2x fa-times-circle navbar-close-btn"></span>
        </label>
      </header>
    </>
  );
};

export { Navbar };
