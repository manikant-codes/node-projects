import { Button } from "flowbite-react";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";

function Demo() {
  return (
    <div>
      <div className="p-8 flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <h1 className="border-2 border-pink-600">Hello</h1>
          <h1 className="border-2 border-pink-600">Hello</h1>
          <h1 className="border-2 border-pink-600">Hello</h1>
          <h1 className="border-2 border-pink-600">Hello</h1>
        </div>
        {/* <Button
          className="w-fit bg-orange-700 [&:hover]:bg-orange-900"
          color=""
        >
          Default
        </Button> */}
        <Button
          className="w-fit"
          outline
          pill
          gradientDuoTone="pinkToOrange"
          isProcessing
        >
          Default
          <HiShoppingCart className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default Demo;
