import React from "react";
import Swiper from "react-id-swiper";
import testi1 from "../images/testi1.png";
import testi2 from "../images/testi2.png";
import testi3 from "../images/testi3.png";
import testi4 from "../images/testi4.png";
import testi5 from "../images/testi5.png";
import testi6 from "../images/testi6.png";
import TestimonialCard from "./TestimonialCard";
import Title from "./Title";

const Testimonials = () => {
  const params = {
    loop: true,
    effect: "flip",
    keyboard: {
      enabled: true
    },
    centeredSlides: true,
    slidesPerView: "1",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  return (
    <section className="testimonials">
      <Title title="What clients are saying" />
      <Swiper {...params}>
        <div>
          <TestimonialCard
            image={testi1}
            quote="I don't need to worry about how the pictures will look because
        capture pictures that shows how we really feel at that moment. It
        was a pleasure to work with him. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente, eius?"
            name="Michelle Wiliiams"
          />
        </div>
        <div>
          <TestimonialCard
            image={testi2}
            quote="Shows how we really feel at that moment. It
        was a pleasure to work with him. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente, eius?"
            name="Gregory Smith"
          />
        </div>
        <div>
          <TestimonialCard
            image={testi3}
            quote="Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente, eius?"
            name="Wilhem Poe"
          />
        </div>
        <div>
          <TestimonialCard
            image={testi4}
            quote="Amazing! I don't need to worry about how the pictures will look because
        capture pictures that shows how we really feel at that moment. It
        was a pleasure to work with him. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente, eius?"
            name="Hansel James"
          />
        </div>
        <div>
          <TestimonialCard
            image={testi5}
            quote="Love working with him.I don't need to worry about how the pictures will look because capture pictures that shows how we really feel at that moment. It was a pleasure to work with him. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente, eius?"
            name="Brad Clint"
          />
        </div>
        <div>
          <TestimonialCard
            image={testi6}
            quote="Complete genius photography!"
            name="Tom hesinki"
          />
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
