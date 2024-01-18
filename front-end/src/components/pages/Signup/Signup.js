import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="main-signup">
        <h2>Choose an account</h2>
        <div className="sign-box">
          <Link to="/business">
            <h3>Business account</h3>
            <p>We are aiming to upgrade your business and help you to reach out more customers.</p>
          </Link>
        </div>
        <div className="sign-box">
          <Link to="/customer">
            <h3>Customer</h3>
            <p>We're giving you the most easy way to reach out what you are looking for.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;