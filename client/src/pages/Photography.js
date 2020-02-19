import React, { useState, useEffect, useContext } from "react";
import Hero from "../components/Hero";
import { SampleImagesContext } from "../context/SampleImages";
import photography from "../images/blog3.png";
import "../scss/photography.scss";

const Photography = () => {
  const { state } = useContext(SampleImagesContext);
  const [type, setType] = useState("all");
  const [filterImages, setFilterImages] = useState([]);

  const handleChange = e => {
    setType(e.target.value);
  };

  useEffect(() => {
    let tempImages = [...state.images];
    if (type !== "all") {
      tempImages = tempImages.filter(image => image.type === type);
    }
    setFilterImages(tempImages);
  }, [type, state.images]);

  return (
    <section className="photographySection">
      <Hero image={photography} heroTitle="Photography" heroSubtitle={type} />
      <form className="filter-images">
        <h4>Filter Images</h4>
        <label htmlFor="type"></label>
        <select name="type" id="type" onChange={handleChange}>
          <option value="all">All</option>
          <option value="wedding">Wedding</option>
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
          <option value="fashion">Fashion</option>
        </select>
      </form>
      <div className="content">
        <div className="imageBox">
          {filterImages.map((image, index) => (
            <div className="box" key={index}>
              <img src={image.url} alt="sample images" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
