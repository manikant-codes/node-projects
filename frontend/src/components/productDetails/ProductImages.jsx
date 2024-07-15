import React from "react";

function ProductImages({ images }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="h-[300px] overflow-hidden border rounded-lg"
          >
            <img src={image} alt="" className="h-full w-full object-cover" />;
          </div>
        );
      })}
    </div>
  );
}

export default ProductImages;
