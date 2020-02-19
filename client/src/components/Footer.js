import React from "react";
import "../scss/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer>
      <div className="col1">
        <h5>Follow Us</h5>
        <div className="line"></div>
        <ul>
          <li>
            <a href="https://facebook.com">
              <FontAwesomeIcon
                icon={["fab", "facebook-square"]}
                className="icon"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FontAwesomeIcon
                icon={["fab", "twitter-square"]}
                className="icon"
              />
            </a>
          </li>

          <li>
            <a href="https://intagram.com">
              <FontAwesomeIcon icon={["fab", "instagram"]} className="icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com">
              <FontAwesomeIcon icon={["fab", "youtube"]} className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col2">
        <h4>Mikael Berseck</h4>
        <span>Photographer / Blogger / Traveller</span>
        <br />
        <small>Copyright 2020 Me-ann</small>
        <br />
        <small>All rights Reserved</small>
      </div>
      <div className="col3">
        <h5>Quick Links</h5>
        <div className="line"></div>
        <ul className="allLinks">
          <li>
            <Link className="footerLinks" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/photography">
              Photography
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/admin/dashboard">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
