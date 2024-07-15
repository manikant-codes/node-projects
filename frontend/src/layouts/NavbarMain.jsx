import { Button, Dropdown, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { HiHeart, HiShoppingCart, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartDrawer from "../components/cart/CartDrawer";
import { COMPANY_NAME } from "../data/consts";
import { dropdownLinks, navLinks } from "../data/layout";
import { logoutUser } from "../redux/slices/userSlice";

function NavbarMain() {
  const [isOpen, setIsOpen] = useState();
  const user = useSelector((store) => {
    return store.user;
  });
  const dispatch = useDispatch();

  const isLoggedIn = user?.user;

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  async function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <Navbar fluid className="shadow-md">
      <div className="flex items-center gap-8">
        <Navbar.Brand className="flex items-center gap-2">
          <HiShoppingCart className="text-2xl text-orange-500" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {COMPANY_NAME}
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          {navLinks.map((link, index) => {
            return (
              <Link className="text-base" key={link.id} to={link.url}>
                {link.name}
              </Link>
            );
          })}
        </Navbar.Collapse>
      </div>
      <div className="flex md:order-2">
        <div className="flex items-center gap-4">
          {!isLoggedIn && <Link to="/login">Login/Register</Link>}
          <Link to="/wishlist">
            <HiHeart className="w-5 h-5 text-red-500" />
          </Link>
          <Button pill onClick={handleToggle}>
            <HiShoppingCart className="w-5 h-5 mr-2" /> Cart
          </Button>
          {isLoggedIn && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <div className="bg-slate-300 p-2 rounded-full">
                  <HiUser className="text-2xl" />
                </div>
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.user?.name}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.user?.email}
                </span>
              </Dropdown.Header>
              {dropdownLinks.map((link) => {
                return (
                  <Dropdown.Item key={link.id}>
                    <Link to={link.url}>{link.name}</Link>
                  </Dropdown.Item>
                );
              })}
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
            </Dropdown>
          )}
        </div>
        <Navbar.Toggle />
      </div>
      <CartDrawer isOpen={isOpen} handleToggle={handleToggle} />
    </Navbar>
  );
}

export default NavbarMain;
