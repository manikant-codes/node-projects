import { Button } from "flowbite-react";
import React from "react";
import { HiTrash } from "react-icons/hi";

function MyUploadedImages({ images, remove }) {
  return (
    <div className="flex items-center gap-4">
      {images.map((img, index) => {
        return (
          <div
            key={index}
            className="w-20 h-20 rounded-lg overflow-hidden relative"
          >
            <img src={img} alt="" className="h-full w-full object-cover" />
            <Button
              pill
              className="absolute top-[2px] right-[2px] w-6 h-6 flex items-center justify-center"
              onClick={() => {
                remove(index);
              }}
            >
              <HiTrash />
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default MyUploadedImages;
