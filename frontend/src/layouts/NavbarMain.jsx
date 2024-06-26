import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { HiHeart, HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import CartDrawer from "../components/cart/CartDrawer";

function NavbarMain() {
  const [isOpen, setIsOpen] = useState();

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Navbar fluid>
      <Navbar.Brand href="">
        <img
          src="/images/ecom-logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Ecom Express
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex items-center gap-4">
          <Link to="/login">Login/Register</Link>
          <Link to="/wishlist">
            <HiHeart className="w-5 h-5 text-red-500" />
          </Link>
          <Button pill onClick={handleToggle}>
            <HiShoppingCart className="w-5 h-5 mr-2" /> Cart
          </Button>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/user/profile">Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/user/orders">Orders</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/user/address">Address</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/" active>
          Men
        </Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </Navbar.Collapse>
      <CartDrawer isOpen={isOpen} handleToggle={handleToggle} />
    </Navbar>
  );
}

export default NavbarMain;
