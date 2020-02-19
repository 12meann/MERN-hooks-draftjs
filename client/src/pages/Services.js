import React from "react";
import Hero from "../components/Hero";
import servicesImg from "../images/services.png";
import ServicesCard from "../components/ServicesCard";
import wedding from "../images/testi1.png";
import portrait from "../images/testi3.png";
import fashion from "../images/testi4.png";
import custom from "../images/testi5.png";
import landscape from "../images/blog1.png";
import promotion from "../images/promotion.png";

const Services = () => {
  return (
    <section className="services">
      <Hero image={servicesImg} heroTitle="Services" />
      <div className="servicesContent">
        <ServicesCard
          image={wedding}
          serviceTitle="Wedding"
          serviceNumber="01"
          serviceContentList={[
            "Choose on how many hours you need",
            "Customizable",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Most of the equipments are provided",
            "Blanditiis perspiciatis eligendi a praesentium, quasi deleniti voluptatibus",
            "explicabo ut eveniet, ex quos. Corrupti, soluta. Inventore?",
            "Dolor sit amet consectetur adipisicing elit.",
            "Always on time"
          ]}
        />
        <ServicesCard
          image={fashion}
          serviceTitle="Fashion"
          serviceNumber="02"
          serviceContentList={[
            "Choose on how many hours you need",
            "Customizable",
            "explicabo ut eveniet, ex quos. Corrupti, soluta. Inventore?",
            "Dolor sit amet consectetur adipisicing elit.",
            "Always on time"
          ]}
        />
        <ServicesCard
          image={portrait}
          serviceTitle="Portraits"
          serviceNumber="03"
          serviceContentList={[
            "Dolor sit amet consectetur adipisicing elit.",
            "Always on time",
            "Choose on how many hours you need",
            "Customizable",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Most of the equipments are provided",
            "Customizable format",
            "Ipsum dolor sit amet consectetur adipisicing elit.",
            "Some of the equipments are provided"
          ]}
        />
        <ServicesCard
          image={landscape}
          serviceTitle="Landscapes"
          serviceNumber="04"
          serviceContentList={[
            "Choose on how many hours you need",
            "Customizable",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "explicabo ut eveniet, ex quos. Corrupti, soluta. Inventore?",
            "Dolor sit amet consectetur adipisicing elit.",
            "Always on time"
          ]}
        />
        <ServicesCard
          image={promotion}
          serviceTitle="Promotions"
          serviceNumber="05"
          serviceContentList={[
            "Choose on how many hours you need",
            "Customizable",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Most of the equipments are provided",

            "Dolor sit amet consectetur adipisicing elit.",
            "Always on time"
          ]}
        />
        <ServicesCard
          image={custom}
          serviceTitle="Custom Events"
          serviceNumber="06"
          serviceContentParagraph="Whatever event you have, we can accomodate you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto. Voluptatem molestiae, suscipit quod quia atque officiis expedita totam! Ipsa quo exercitationem quibusdam officia aperiam minus. Dolore animi id ipsum."
        />
      </div>
    </section>
  );
};

export default Services;
