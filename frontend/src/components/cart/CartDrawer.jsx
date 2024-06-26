import { Drawer } from "flowbite-react";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import CartItem from "./CartItem";

function CartDrawer({ isOpen, handleToggle }) {
  return (
    <Drawer open={isOpen} onClose={handleToggle} position="right">
      <Drawer.Header titleIcon={HiShoppingCart} title="Cart" />
      <Drawer.Items>
        <CartItem />
      </Drawer.Items>
    </Drawer>
  );
}

export default CartDrawer;
