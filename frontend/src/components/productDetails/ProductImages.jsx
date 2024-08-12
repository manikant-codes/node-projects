import React from "react";

function ProductImages({ images }) {
  return (
    <div className="gap-2 grid grid-cols-2">
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="border rounded-lg h-[320px] overflow-hidden"
          >
            <img src={image} alt="" className="w-full h-full object-cover" />;
          </div>
        );
      })}
    </div>
  );
}

export default ProductImages;
