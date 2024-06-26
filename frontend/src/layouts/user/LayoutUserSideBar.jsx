import React from "react";
import { HiLocationMarker, HiShoppingBag, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const links = [
  { icon: <HiUser />, url: "/user/profile", name: "Profile" },
  { icon: <HiLocationMarker />, url: "/user/address", name: "Address" },
  { icon: <HiShoppingBag />, url: "/user/orders", name: "Orders" },
];

function LayoutUserSideBar() {
  return (
    <div className="p-8 border-r border-gray-300">
      <ul className="flex flex-col gap-4">
        {links.map((value, index) => {
          return (
            <li className="flex items-center gap-2">
              <div className="[&>svg]:text-xl [&>svg]:text-gray-500">
                {value.icon}
              </div>
              <Link to={value.url}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LayoutUserSideBar;
