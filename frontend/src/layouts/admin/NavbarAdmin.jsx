import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../../data/consts";
import { logoutUser } from "../../redux/slices/userSlice";

function NavbarAdmin() {
  const user = useSelector((store) => {
    return store.user;
  });
  const dispatch = useDispatch();

  async function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <Navbar fluid className="border-b">
      <Navbar.Brand className="flex items-center gap-2">
        <HiShoppingBag className="text-2xl text-primary" />
        <span className="font-semibold text-xl dark:text-white whitespace-nowrap self-center">
          {COMPANY_NAME}
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex items-center gap-4">
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
              <span className="block font-medium text-sm truncate">
                {user?.user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarAdmin;
