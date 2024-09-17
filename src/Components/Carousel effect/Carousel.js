import React from "react";
import { Carousel } from "react-responsive-carousel";
import { image } from "./data";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autopaly={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs
      >
        {img.map((imgitemlink) => {
          return <img src={imgitemlink} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
