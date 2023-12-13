import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="content">
                <div className="row">
                    <div className="column-logo">
                        <h2 className="logo">
                        </h2>
                    </div>
                    <div className="footer-column">
                    <div className="column">
                        <h4>About Us</h4>
                        <ul className="list">
                            <li><a href="http://localhost:3000/team">Team</a></li>
                            <li>Clients</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Services</h4>
                        <ul className="list">
                            <li>Places</li>
                            <li>Products</li>
                            <li>Recipes</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Contact Us</h4>
                        <ul className="list">
                            <li>E-Mail</li>
                            <li>
                                <span className="media-icon"><FaFacebook fill="#4267B2" /></span>
                                <span className="media-icon"><FaTwitter fill=" #00acee" /></span>
                                <span className="media-icon"><FaLinkedin fill="#0072b1" /></span>
                            </li>
                            <li>Call US</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <hr />
                <div className="rights">
                    <p>&copy; {new Date().getFullYear()} <span className="logo"></span> | All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;