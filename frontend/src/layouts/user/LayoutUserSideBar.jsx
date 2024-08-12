import React from "react";
import { HiLocationMarker, HiShoppingBag, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    icon: <HiUser className="group-hover:text-primary text-gray-500 text-xl" />,
    url: "/user/profile",
    name: "Profile",
  },
  {
    id: 2,
    icon: (
      <HiLocationMarker className="group-hover:text-primary text-gray-500 text-xl" />
    ),
    url: "/user/address",
    name: "Address",
  },
  {
    id: 3,
    icon: (
      <HiShoppingBag className="group-hover:text-primary text-gray-500 text-xl" />
    ),
    url: "/user/orders",
    name: "Orders",
  },
];

function LayoutUserSideBar() {
  return (
    <div className="border-gray-300 border-r">
      <ul className="flex flex-col">
        {links.map((value, index) => {
          return (
            <li key={index} className="flex items-center gap-2">
              <Link
                to={value.url}
                className="flex items-center gap-2 p-4 border-b border-b-slate-300 w-full hover:text-primary group"
              >
                {value.icon}
                <span>{value.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LayoutUserSideBar;
