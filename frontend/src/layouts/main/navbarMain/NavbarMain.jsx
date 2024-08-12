import { Navbar } from "flowbite-react";
import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import { COMPANY_NAME } from "../../../data/consts";

function NavbarMain() {
  return (
    <Navbar fluid border>
      <Navbar.Brand href="/">
        <HiShoppingBag className="mr-2 text-3xl text-primary" />
        <span className="font-semibold text-xl dark:text-white whitespace-nowrap self-center">
          {COMPANY_NAME}
        </span>
      </Navbar.Brand>
      <NavButtons />
      <NavLinks />
    </Navbar>
  );
}

export default NavbarMain;
