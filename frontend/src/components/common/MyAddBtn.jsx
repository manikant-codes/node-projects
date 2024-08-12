import { Button } from "flowbite-react";
import React from "react";
import { HiPlus } from "react-icons/hi";

function MyAddBtn({ text, onClick }) {
  return (
    <Button className="h-fit" pill onClick={onClick}>
      <span className="flex items-center gap-1">
        <HiPlus className="w-4 h-4" />
        <span>{text}</span>
      </span>
    </Button>
  );
}

export default MyAddBtn;
