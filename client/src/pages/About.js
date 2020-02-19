import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";

import aboutImg from "../images/about.png";
import "../scss/about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section className="aboutSection">
      <Hero
        heroTitle="About"
        heroSubtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, perspiciatis.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dignissimos."
        image={aboutImg}
      />
      <div className="aboutContent">
        <Title title="Humble beginnings" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quasi
          nam molestias laborum porro, vel iusto voluptates voluptas, nostrum,
          in excepturi cupiditate nulla sequi provident at asperiores
          repudiandae? Vel doloribus sed quam eos asperiores? Distinctio commodi
          voluptate explicabo sed porro et provident molestias, corrupti
          voluptatem laudantium, quia non aliquid nesciunt eius veritatis
          placeat? A deleniti alias aspernatur, magnam odio laborum?
        </p>
        <Title title="Goal in life" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          eaque quam pariatur! Eius totam, vel culpa dolores necessitatibus quo
          quasi iure accusamus architecto ducimus ab quae eum voluptatibus,
          temporibus voluptatum asperiores nostrum modi laboriosam sed. Aut quod
          temporibus optio sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          eaque quam pariatur! Eius totam, vel culpa dolores necessitatibus qu.
        </p>
        <Title title="recognitions" />
        <ul className="fa-ul">
          <li>
            <FontAwesomeIcon icon="check" listItem className="listIcon" />
            2019 Outstanding in Photography.
          </li>
          <li>
            <FontAwesomeIcon icon="check" listItem className="listIcon" /> 2018
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            <FontAwesomeIcon icon="check" listItem className="listIcon" /> 2015
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            <FontAwesomeIcon icon="check" listItem className="listIcon" /> 2013
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            <FontAwesomeIcon icon="check" listItem className="listIcon" /> 2012
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            <FontAwesomeIcon icon="check" className="listIcon" listItem /> 2009
            Begginer's luck dolor sit amet. lorem 5
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
