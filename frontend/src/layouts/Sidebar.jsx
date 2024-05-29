import { Drawer } from "flowbite-react";
import React from "react";

function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    { name: "Profile", link: "/admin/dashboard" },
    { name: "Todos", link: "/admin/dashboard" },
  ];
  return (
    <div>
      <ul className="bg-[#b3e5fc] h-full flex flex-col gap-4">
        {links.map((value) => {
          return <li className="px-4 py-2">{value.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
