import React from "react";
import NavbarMain from "./NavbarMain";
import FooterMain from "./FooterMain";
import { Outlet, useLocation } from "react-router-dom";

function LayoutMain() {
  const { pathname } = useLocation();

  const isLoginRegister = pathname === "/login" || pathname === "/register";

  return (
    <>
      <NavbarMain />
      <Outlet />
      {!isLoginRegister && <FooterMain />}
    </>
  );
}

export default LayoutMain;
