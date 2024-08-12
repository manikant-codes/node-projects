import { Button, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { HiShoppingCart, HiUser } from "react-icons/hi";
import ProfileDropdown from "./ProfileDropdown";
import CartDrawer from "../../../components/cart/CartDrawer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavButtons() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const user = useSelector((store) => {
    return store.user.user;
  });

  const navigate = useNavigate();

  function handleCartToggle() {
    setIsCartOpen(!isCartOpen);
  }

  function goToLogin() {
    navigate("/login");
  }

  return (
    <>
      <div className="flex gap-2 md:order-2">
        {!user && (
          <Button pill outline onClick={goToLogin}>
            <HiUser className="w-5 h-5 mr-2" /> Login / Register
          </Button>
        )}
        <Button pill onClick={handleCartToggle}>
          <HiShoppingCart className="w-5 h-5 mr-2" /> Cart
        </Button>
        {user && <ProfileDropdown />}
        <Navbar.Toggle />
      </div>
      <CartDrawer isOpen={isCartOpen} handleToggle={handleCartToggle} />
    </>
  );
}

export default NavButtons;
