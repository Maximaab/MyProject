import React from "react";
import { Carousel } from "react-bootstrap";

export const MyBootstrapSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" alt="Slide 1" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Slide 2" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Slide 2" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Slide 2" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>      {/* Добавьте дополнительные слайды по аналогии */}
    </Carousel>
  );
};


