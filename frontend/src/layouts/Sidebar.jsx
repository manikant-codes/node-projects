import { Drawer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard, LuUser2, LuList } from "react-icons/lu";

function Sidebar() {
  const links = [
    { name: "Profile", icon: <LuUser2 />, link: "/admin/profile" },
    {
      name: "Dashboard",
      icon: <LuLayoutDashboard />,
      link: "/admin/dashboard",
    },
    { name: "Todos", icon: <LuList />, link: "/admin/todos" },
  ];
  return (
    <div>
      <ul className="bg-slate-50 h-full flex flex-col gap-6 p-4 border-r-[2px]">
        {links.map((value) => {
          return (
            <Link
              to={value.link}
              className="flex gap-2 items-center cursor-pointer hover:underline"
            >
              {value.icon}
              {value.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
