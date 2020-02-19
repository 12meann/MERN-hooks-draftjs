import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/navbar.scss";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef();
  const toggleRef = useRef();
  // sticky header
  useEffect(() => {
    const header = document.querySelector(".header");
    const handleStickyHeader = () => {
      window.pageYOffset > header.offsetTop
        ? setIsSticky(true)
        : setIsSticky(false);
    };
    document.addEventListener("scroll", handleStickyHeader, false);
    return () => {
      document.removeEventListener("scroll", handleStickyHeader, false);
    };
  }, []);

  //handleclickoutside
  useEffect(() => {
    const handleClickOutside = e => {
      const links = document.querySelector(".links");
      let el = e.target;
      if (
        !el.closest(".links") &&
        links.classList.contains("active") &&
        !el.closest(".toggle")
      ) {
        setNavOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <nav className="nav">
        <div ref={toggleRef}>
          <FontAwesomeIcon
            onClick={() => setNavOpen(!navOpen)}
            icon="bars"
            className="toggle"
          />
        </div>
        <div className="mainLogo">
          <h1>Mikael Berseck</h1>
        </div>
        <ul ref={navbarRef} className={`${navOpen ? "links active" : "links"}`}>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/photography">
              Photography
            </Link>
          </li>
          <li>
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
