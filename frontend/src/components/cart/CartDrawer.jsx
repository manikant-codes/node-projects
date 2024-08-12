import { Button, Drawer } from "flowbite-react";
import React from "react";
import {
  HiArrowRight,
  HiMinus,
  HiPlus,
  HiShoppingCart,
  HiTrash,
} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyList from "../common/list/MyList";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../../redux/slices/cartSlice";

function CartDrawer({ isOpen, handleToggle }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, total } = useSelector((store) => {
    return store.cart;
  });

  function getImgUrl(value) {
    return value.images[0];
  }

  function renderTitle(value) {
    return (
      <div className="flex justify-between items-center gap-2 w-full">
        <h4 className="line-clamp-1 font-semibold text-lg">{value.name}</h4>
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

  function goToCheckout() {
    navigate("/checkout");
    handleToggle();
  }

  return (
    <Drawer open={isOpen} onClose={handleToggle} position="right">
      <Drawer.Header titleIcon={HiShoppingCart} title="Cart" />
      <Drawer.Items>
        <MyList
          list={cart}
          fields={{ title: "name", desc: "desc" }}
          getImgUrl={getImgUrl}
          renderTitle={renderTitle}
          renderDesc={renderDesc}
        />
      </Drawer.Items>
      <div className="flex justify-between items-center mt-4">
        <span className="font-semibold text-lg">Total:</span>
        <span className="font-semibold text-lg">₹{total}</span>
      </div>
      <Button
        pill
        size="sm"
        className="right-[16px] bottom-[16px] left-[16px] absolute w-auto"
        color="accent"
        onClick={goToCheckout}
      >
        Checkout <HiArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </Drawer>
  );
}

export default CartDrawer;
