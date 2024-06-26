import React from "react";
import { Outlet } from "react-router-dom";
import LayoutUserSideBar from "./LayoutUserSideBar";

function LayoutUser() {
  return (
    <div className="grid grid-cols-[200px_1fr]">
      <LayoutUserSideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutUser;
