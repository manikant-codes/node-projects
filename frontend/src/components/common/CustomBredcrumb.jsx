import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";

function CustomBredcrumb({ links }) {
  return (
    <Breadcrumb aria-label="Breadcrumb" className="mb-8">
      <Breadcrumb.Item href="#" icon={HiHome}>
        home
      </Breadcrumb.Item>
      {links?.map((value) => {
        return <Breadcrumb.Item href="#">{value}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
}

export default CustomBredcrumb;
