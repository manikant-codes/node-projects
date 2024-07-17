import React from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 1, name: "Dashboard", link: "/admin/dashboard" },
  { id: 2, name: "Products", link: "/admin/products" },
  { id: 3, name: "Categories", link: "/admin/categories" },
  { id: 4, name: "Orders", link: "/admin/orders" },
  { id: 5, name: "Users", link: "/admin/users" },
  { id: 6, name: "Account", link: "/admin/account" },
  { id: 7, name: "Log Out" },
];

function SidebarAdmin() {
  return (
    <div className="border-r min-h-[calc(100vh-60px)] bg-slate-100">
      <ul>
        {links.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className="block p-4 border-b cursor-pointer hover:bg-orange-500 hover:text-white border-b-slate-300"
                to={item.link}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarAdmin;
