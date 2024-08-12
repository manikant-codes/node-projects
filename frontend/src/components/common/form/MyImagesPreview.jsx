import { Button } from "flowbite-react";
import React from "react";
import { HiTrash } from "react-icons/hi";

function MyImagesPreview({ images, remove }) {
  return (
    <div className="flex items-center gap-2">
      {images.map((url, index) => {
        return (
          <div className="relative border-slate-300 border rounded-lg w-20 h-20 overflow-hidden">
            <img src={url} alt="" className="w-full h-full object-cover" />
            <Button
              pill
              className="top-[2px] right-[2px] absolute flex justify-center items-center w-[24px] h-[24px]"
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

export default MyImagesPreview;
