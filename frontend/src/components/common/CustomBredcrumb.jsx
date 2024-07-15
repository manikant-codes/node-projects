import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";

function CustomBredcrumb({ items }) {
  return (
    <Breadcrumb aria-label="products list breadcrumb" className="mb-8">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      {items?.map((item) => {
        return <Breadcrumb.Item href="#">{item.text}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
}

export default CustomBredcrumb;
