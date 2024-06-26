import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function ProductImages() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((image) => {
        return (
          <div className="h-[300px] overflow-hidden border">
            <img
              src={image.src}
              alt=""
              className="h-full w-full object-cover"
            />
            ;
          </div>
        );
      })}
    </div>
  );
}

export default ProductImages;
