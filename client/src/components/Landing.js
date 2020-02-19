import React from "react";
import "../scss/landing.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import person from "../images/about.png";

const Landing = () => {
  return (
    <section className="landing">
      <div className="container">
        <div className="sideHeading">
          <img className="image" src={person} alt="person" />
          <div className="logo">
            <h1>Mikhael Berseck</h1>
          </div>
          <div className="subheader">
            <h5>Photographer</h5>
            <h5>Blogger</h5>
            <h5>Traveller</h5>
          </div>

          <div className="smm">
            <ul className="fa-ul list-item">
              <li>
                <span className="text">Facebook</span>
                <a
                  href="https://facebook.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "facebook-square"]}
                    className="icons"
                  />
                </a>
              </li>
              <li>
                <span className="text">Twitter</span>
                <a
                  href="https://twitter.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "twitter-square"]}
                    className="icons"
                  />
                </a>
              </li>

              <li>
                <span className="text">Instagram</span>
                <a
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="icons"
                  />
                </a>
              </li>
              <li>
                <span className="text">Linkedin</span>
                <a
                  href="https://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="icons"
                  />
                </a>
              </li>
              <li>
                <span className="text">YouTube</span>
                <a
                  href="https://youtube.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "youtube"]}
                    className="icons"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="footerHeading">
            <ul>
              <li>
                <small>
                  Copyright &copy; 2019 <br />
                  Me-ann
                </small>
              </li>
              <li>
                <small>All Rights Reserved</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="landingMenu">
          <div className="photography">
            <div className="overlay">
              <Link to="/photography">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h3>Photography</h3>
              </Link>
            </div>
          </div>
          <div className="about">
            <div className="overlay">
              <Link to="/about">
                <h3>about</h3>
              </Link>
            </div>
          </div>
          <div className="services">
            <div className="overlay">
              <Link to="/services">
                <h3>services</h3>
              </Link>
            </div>
          </div>
          <div className="contact">
            <div className="overlay">
              <Link to="contact">
                <h3>contact</h3>
              </Link>
            </div>
          </div>
          <div className="blog">
            <div className="overlay">
              <Link to="/blog">
                <h3>blog</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
