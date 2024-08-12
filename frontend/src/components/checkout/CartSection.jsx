import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";

function CartSection() {
  const { cart, total } = useSelector((store) => {
    return store.cart;
  });
  return (
    <div className="border-slate-300 p-4 border rounded-lg">
      {cart.map((cartItem, index) => {
        return <CartItem key={index} cartItem={cartItem} />;
      })}
      <div className="flex justify-between items-center mt-4">
        <span className="font-semibold text-lg">Total:</span>
        <span className="font-semibold text-lg">₹{total}</span>
      </div>
    </div>
  );
}

export default CartSection;
