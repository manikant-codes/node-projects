import React from "react";
import { Outlet } from "react-router-dom";
import LayoutUserSideBar from "./LayoutUserSideBar";

function LayoutUser() {
  return (
    <div className="grid grid-cols-[256px_1fr]">
      <LayoutUserSideBar />
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutUser;
