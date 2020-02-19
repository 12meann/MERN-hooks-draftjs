import React from "react";
import "../scss/globals.scss";

const Header = ({ image, heroTitle, heroSubtitle, children }) => {
  return (
    <div className="hero">
      <img src={image} alt="hero" />
      <div className="heroContent">
        <h1>
          {heroTitle} <span className="smallLine"></span>
        </h1>

        <p>{heroSubtitle}</p>
      </div>

      {children}
    </div>
  );
};

export default Header;
