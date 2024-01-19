import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoDocumentText } from 'react-icons/io5';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const cvUrl = 'https://flowcv.com/resume/43747ulvs3';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling behavior
    });
  };

  return (
    <div className="footer">
      <div className="content">
        <div className="row">
          <div className="column-logo">
            <h2 className="logo">
            </h2>
          </div>
          <div className="footer-column">
            <div className="column">
              <h4><Link to='/about'>About us</Link></h4>
              <ul className="list">
                <li><Link to='/team' onClick={scrollToTop}>Giorgio Mazzuca</Link></li>
                <li>Clients</li>
                <li>Partners</li>
              </ul>
            </div>
            <div className="column" style={{ marginRight: "28px" }}>
              <h4><Link to='/services' onClick={scrollToTop}>Services</Link></h4>
              <ul className="list">
                <li>Places</li>
                <li>Products</li>
                <li>Recipes</li>
              </ul>
            </div>
            <div className="column">
              <h4><Link to='/contact' onClick={scrollToTop}>Contact</Link></h4>
              <ul className="list">
                <li>
                  <Link to="mailto:mazzucagiorgio@gmail.com">
                    E-Mail
                  </Link>
                </li>
                <li style={{ marginTop: '3px' }}>
                  <Link to={"https://www.linkedin.com/in/giorgio-mazzuca/"} target="_blank" rel="noopener noreferrer">
                    <span className="media-icon"><IoLogoLinkedin fill="#0072b1" /></span>
                  </Link>
                  <Link to={"https://github.com/mazgio"} target="_blank" rel="noopener noreferrer">
                    <span className="media-icon"><IoLogoGithub fill="#211F1F" /></span>
                  </Link>
                  <Link to={cvUrl} target="_blank" rel="noopener noreferrer">
                    <span className="media-icon"><IoDocumentText fill="#1DA1F2" /></span>
                  </Link>
                </li>
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
  );
};

export default Footer;