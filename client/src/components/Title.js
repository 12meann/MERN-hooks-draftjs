import React from "react";
import "../scss/globals.scss";

const Title = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="line"></div>
      {children}
    </>
  );
};

export default Title;
