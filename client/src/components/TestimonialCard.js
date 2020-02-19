import React from "react";
import "../scss/globals.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialCard = ({ image, quote, name, children }) => {
  return (
    <div className="swiper-card">
      <div className="image-box">
        <img src={image} alt="testimonialImage" />
      </div>
      <div className="content">
        <FontAwesomeIcon icon="quote-left" className="quote-left" />
        <blockquote>{quote}</blockquote>
        <span>--{name}</span>
        <FontAwesomeIcon icon="quote-right" className="quote-right" />
        {children}
      </div>
    </div>
  );
};

export default TestimonialCard;
