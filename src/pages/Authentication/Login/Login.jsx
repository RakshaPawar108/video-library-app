import "./../Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth, useLikes } from "../../../context";
import { dispatchLogin } from "../../../utils/";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { authDispatch } = useAuth();
  const { likesDispatch } = useLikes();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    if (user.email !== "" && user.password !== "") {
      dispatchLogin(user, authDispatch, navigate, likesDispatch);
    } else {
      alert("Please fill up both the fields");
    }
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setUser(() => ({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    }));
  };
  return (
    <main className="main-wrapper">
      <form className="auth-container">
        <h1 className="auth-title">Login</h1>
        <p className="auth-subtitle">Please enter your email and password</p>
        <div className="input-container standard auth-email">
          <input
            type="email"
            id="email"
            placeholder=" "
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <label htmlFor="email">Enter Your Email</label>
          <small>Enter Valid Email</small>
        </div>

        <div className="input-container standard auth-password">
          <input
            type="password"
            id="password"
            placeholder=" "
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <label htmlFor="password">Enter Password</label>
          <small>Enter Valid Password</small>
        </div>

        <div className="inline">
          <span className="inline-checkbox">
            <input type="checkbox" name="remember" id="remember" />
            <label className="remember-box" htmlFor="remember">
              Remember Me
            </label>
          </span>

          <p className="auth-link">
            <Link to="/">Forgot Password?</Link>
          </p>
        </div>

        <button
          type="submit"
          className="button btn-info btn-login"
          onClick={loginHandler}
        >
          Login
        </button>
        <button
          type="submit"
          className="button btn-info btn-login"
          onClick={guestLoginHandler}
        >
          Login with Guest Credentials
        </button>
        <hr className="divider" />
        <p className="auth-link">Don't have an account?</p>
        <button className="button btn-info btn-signup-link">
          <Link to="/signup">Sign Up</Link>
        </button>
      </form>
    </main>
  );
};
