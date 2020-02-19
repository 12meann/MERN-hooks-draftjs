import React from "react";
import { Link } from "react-router-dom";
import "../scss/globals.scss";

const BlogCard = ({ blogLink, blogImg, altImage, title, children }) => {
  return (
    <Link to={blogLink}>
      <div className="card">
        <div className="img-box">
          <img src={blogImg} alt={altImage} />
        </div>
        <div className="content">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
