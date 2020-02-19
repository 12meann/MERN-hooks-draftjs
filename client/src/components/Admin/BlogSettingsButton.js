import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/editor.scss";
import { useHistory, Link } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";

const BlogSettingsButton = ({ handleClickEdit, blogId }) => {
  //context
  const { deleteBlog } = useContext(BlogContext);

  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [clickOutside, setClickOutside] = useState(false);
  const dropdownRef = useRef();
  const history = useHistory();

  const handleClick = e => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  const handleClickOutside = e => {
    if (!dropdownRef.current.contains(e.target)) {
      setClickOutside(true);
      setShowDropdownMenu(false);
    }
  };
  const handleDelete = () => {
    deleteBlog(blogId);
    history.push("/admin/dashboard/blogs");
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={handleClick} className="dropbtn">
        Blog Settings
        <FontAwesomeIcon icon="chevron-down" className="dropdownIcon" />
      </button>
      <div
        id="myDropdown"
        className={`dropdown-content ${showDropdownMenu ? "show" : ""}`}
      >
        <button onClick={handleClickEdit}>
          {" "}
          <FontAwesomeIcon icon="file-image" /> &nbsp; Edit Image
        </button>
        <Link to={`/admin/dashboard/blog/${blogId}/editblog`}>
          {" "}
          <FontAwesomeIcon icon="pencil-alt" /> &nbsp; Edit blog
        </Link>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon="trash" className="deleteIcon" /> &nbsp; Delete
          Blog
        </button>
      </div>
    </div>
  );
};

export default BlogSettingsButton;
