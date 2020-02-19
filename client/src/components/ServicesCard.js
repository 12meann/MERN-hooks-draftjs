import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/services.scss";
import { Link } from "react-router-dom";

const ServicesCard = ({
  image,
  serviceTitle,
  serviceNumber,
  serviceContentList,
  serviceContentParagraph
}) => {
  const packageList = serviceContentList;
  return (
    <div className="servicesCard">
      <div className="content">
        <img src={image} alt="services" />
        <div className="title">
          <h3>
            {serviceTitle}
            <div className="cardLine">
              <span>{serviceNumber}</span>
            </div>
          </h3>
        </div>
        <div className="contentList">
          <ul className="fa-ul">
            {packageList
              ? packageList.map(list => (
                  <li key={list}>
                    <FontAwesomeIcon icon="camera" listItem className="icons" />
                    {list}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="contentParagraph">
          <p>{serviceContentParagraph}</p>
        </div>
      </div>
      <div className="cta">
        <Link to="/contact">Get A Quote</Link>
      </div>
    </div>
  );
};

export default ServicesCard;
