import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Dashboard", to: "/admin/dashboard" },
  { name: "Pages", to: "/admin/pages" },
  { name: "Categories", to: "/admin/categories" },
  { name: "Products", to: "/admin/products" },
  { name: "Filters", to: "/admin/filters" },
  { name: "Orders", to: "/admin/orders" },
  { name: "Users", to: "/admin/users" },
  { name: "Account", to: "/admin/account" },
  { name: "Log Out" },
];

function SidebarAdmin() {
  return (
    <div className="border-r border-r-slate-300 min-h-[calc(100vh-60px)]">
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="block p-4 border-b border-b-slate-300 hover:text-primary cursor-pointer"
                to={item.to}
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
