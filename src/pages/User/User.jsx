import { Link } from "react-router-dom";
import { useAuth, useLikes } from "../../context";
import "./User.css";

export const User = () => {
  const { authDispatch } = useAuth();
  const { likesDispatch } = useLikes();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
    likesDispatch({ type: "EMPTY_LIKE_PAGE" });
  };
  return (
    <div>
      <h2>Logout</h2>
      <Link to="/logout">
        <button className="button btn-info btn-logout" onClick={logoutHandler}>
          Logout
        </button>
      </Link>
    </div>
  );
};
