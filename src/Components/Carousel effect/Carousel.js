import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./carousel.module.css"

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autopaly={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imgitemlink) => {
          return <img src={imgitemlink} alt="/" />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
