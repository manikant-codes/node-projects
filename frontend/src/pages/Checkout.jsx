import { Button } from "flowbite-react";
import React, { useState } from "react";
import { HiMinus, HiPlus, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import PaymentSection from "../components/checkout/PaymentSection";
import UserPageTitle from "../components/common/UserPageTitle";
import MyList from "../components/common/list/MyList";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../redux/slices/cartSlice";

function Checkout() {
  const { cart, total } = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();

  function getImgUrl(value) {
    return value.images[0];
  }

  function renderTitle(value) {
    return (
      <div className="flex justify-between items-center w-full">
        <h4 className="font-semibold text-lg">{value.name}</h4>
        <p className="font-semibold text-lg">₹{value.price}</p>
      </div>
    );
  }

  function renderDesc(value) {
    console.log("value", value);
    function handleRemove() {
      dispatch(removeFromCart(value._id));
    }

    function handleIncreaseQty() {
      dispatch(increaseQty(value._id));
    }

    function handleDecreaseQty() {
      dispatch(decreaseQty(value._id));
    }

    return (
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Button onClick={handleDecreaseQty} color="gray" pill size="xs">
            <HiMinus />
          </Button>
          <p>{value.qty}</p>
          <Button onClick={handleIncreaseQty} color="gray" pill size="xs">
            <HiPlus />
          </Button>
        </div>
        <Button pill size="xs" color="failure" onClick={handleRemove}>
          <HiTrash />
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <UserPageTitle title="Checkout" />
      <div>
        {/* <AddressSection /> */}
        <div>
          <MyList
            list={cart}
            fields={{ title: "name", desc: "desc" }}
            getImgUrl={getImgUrl}
            renderTitle={renderTitle}
            renderDesc={renderDesc}
          />
          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold text-lg">Total:</span>
            <span className="font-semibold text-lg">₹{total}</span>
          </div>
        </div>
        <PaymentSection />
      </div>
    </div>
  );
}

export default Checkout;
