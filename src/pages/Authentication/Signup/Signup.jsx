import "./../Auth.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <main className="main-wrapper">
      <form className="auth-container" action="" method="post">
        <h1 className="auth-title">Signup</h1>
        <p className="auth-subtitle">Create an Account</p>
        <div className="input-container standard auth-name">
          <input type="text" id="firstName" placeholder=" " value="" />
          <label htmlFor="firstName">Enter Your First Name</label>
        </div>
        <div className="input-container standard auth-name">
          <input type="text" id="lastName" placeholder=" " value="" />
          <label htmlFor="lastName">Enter Your Last Name</label>
        </div>
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

        <div className="input-container standard auth-password-confirm">
          <input
            type="password"
            id="confirmPassword"
            placeholder=" "
            value=""
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <small>Enter Valid Password</small>
        </div>

        <button type="submit" className="button btn-info btn-signup">
          Sign Up
        </button>
        <hr className="divider" />
        <p className="auth-link">Already have an existing account?</p>
        <button className="button btn-info btn-login-link">
          <Link to="/login">Login</Link>
        </button>
      </form>
    </main>
  );
};
