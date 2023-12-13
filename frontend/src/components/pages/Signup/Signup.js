import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="main-signup">
                <h2>Choose an account</h2>
                <div className="sign-box">
                    <a href="business-signup">
                        <h3>Business account</h3>
                        <p>We are aiming to upgrade your business and help you to reach out more customers.</p>
                    </a>
                </div>
                <div className="sign-box">
                    <a href="customer-signup">
                        <h3>Customer</h3>
                        <p>We're giving you the most easy way to reach out what you are looking for.</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Signup;