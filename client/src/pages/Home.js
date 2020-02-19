import React from "react";
import "../scss/home.scss";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../components/Title";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import PinnedBlogs from "../components/PinnedBlogs";

const Home = () => {
  return (
    <>
      <Landing />
      <Navbar />
      <div className="homeContent">
        <section className="description">
          <h2>Photography at its finest</h2>

          <ul>
            <li>
              <FontAwesomeIcon icon="camera" size="5x" className="icon" />
              <h5>Captured Moment</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis, ipsa.
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon="eye" size="5x" className="icon" />
              <h5>An eye for detail</h5>
              <p>assumenda deserunt totam consectetur adipisicing elit.</p>
            </li>
            <li>
              <FontAwesomeIcon icon="check" size="5x" className="icon" />
              <h5>Satisfaction Guaranteed</h5>
              <p>Sit amet consectetur adipisicing elit. Perferendis, ipsa.</p>
            </li>
          </ul>
        </section>
        <section className="recentBlogs">
          <Title title="Pinned Blogs" />
          <PinnedBlogs />
        </section>

        <Testimonials />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
