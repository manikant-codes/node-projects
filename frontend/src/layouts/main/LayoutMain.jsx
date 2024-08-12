import React from "react";
import NavbarMain from "./navbarMain/NavbarMain";
import FooterMain from "./FooterMain";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

function LayoutMain() {
  const { pathname } = useLocation();

  const isLoginRegister = pathname === "/login" || pathname === "/register";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavbarMain />
      <Outlet />
      {!isLoginRegister && <FooterMain />}
    </>
  );
}

export default LayoutMain;
