import { Carousel } from "flowbite-react";
import React from "react";

function CarouselHome({ images }) {
  return (
    <div className="h-[70vh]">
      <Carousel className="[&>div]:rounded-none">
        {images.map((img) => {
          return <img src={img.url} alt={img.alt} />;
        })}
      </Carousel>
    </div>
  );
}

export default CarouselHome;
