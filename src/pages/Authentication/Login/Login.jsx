import "./../Auth.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="main-wrapper">
      <form className="auth-container">
        <h1 className="auth-title">Login</h1>
        <p className="auth-subtitle">Please enter your email and password</p>
        <div className="input-container standard auth-email">
          <input type="email" id="email" placeholder=" " value="" />
          <label htmlFor="email">Enter Your Email</label>
          <small>Enter Valid Email</small>
        </div>

        <div className="input-container standard auth-password">
          <input type="password" id="password" placeholder=" " value="" />
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

        <button type="submit" className="button btn-info btn-login">
          Login
        </button>
        <button type="submit" className="button btn-info btn-login">
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
