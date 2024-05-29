import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AdminLayout() {
  return (
    <div>
      <div className="grid grid-cols-[200px_1fr]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
