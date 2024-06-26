import { Button } from "flowbite-react";
import React from "react";
import { HiMinus, HiPlus, HiTrash } from "react-icons/hi";

function CartItem() {
  return (
    <div className="flex items-center gap-2 border-b border-cyan-200 pb-2">
      <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grow-[1]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-between grow-[1]">
            <h5>Title</h5>
            <p>100$</p>
          </div>
          <div>
            <Button pill size="xs" color="failure">
              <HiTrash />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button pill size="xs">
            <HiMinus />
          </Button>
          <p>10</p>
          <Button pill size="xs">
            <HiPlus />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
