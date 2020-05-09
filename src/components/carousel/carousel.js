import React from "react";
import { Carousel } from "react-bootstrap";

const HeroCarousel = ({ heroes }) => {
  return (
    <Carousel>
      {heroes.map((hero) => (
        <Carousel.Item>
          <img className="d-block w-100" src="hero.src" alt="First slide" />
          <Carousel.Caption>
            <h3>hero.caption</h3>
            <p>hero.detail</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
