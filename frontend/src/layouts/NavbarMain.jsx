import { Button, Dropdown, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { HiHeart, HiShoppingCart, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartDrawer from "../components/cart/CartDrawer";
import { COMPANY_NAME } from "../data/consts";
import { dropdownLinks, dropdownUserInfo, navLinks } from "../data/layout";
import { logoutUser } from "../redux/slices/userSlice";

function NavbarMain() {
  const [isCartOpen, setCartIsOpen] = useState();
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.user.user;
  });

  function handleCartToggle() {
    setCartIsOpen(!isCartOpen);
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
          {!user && <Link to="/login">Login/Register</Link>}
          <Link to="/wishlist">
            <HiHeart className="w-5 h-5 text-red-500" />
          </Link>
          <Button pill onClick={handleCartToggle}>
            <HiShoppingCart className="w-5 h-5 mr-2" /> Cart
          </Button>
          {user && (
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
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              {dropdownLinks.map((link) => {
                return (
                  <Dropdown.Item key={link.id}>
                    <Link to={link.url}>{link.name}</Link>
                  </Dropdown.Item>
                );
              })}
              {user.role === "admin" && (
                <Dropdown.Item key="admin-dashboard">
                  <Link to="/admin/dashboard">Admin Dashboard</Link>
                </Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </Dropdown>
          )}
        </div>
        <Navbar.Toggle />
      </div>
      <CartDrawer isOpen={isCartOpen} handleToggle={handleCartToggle} />
    </Navbar>
  );
}

export default NavbarMain;
