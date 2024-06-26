import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";
import { useParams } from "react-router-dom";

function ProductDetailsBreadCrumb() {
  const params = useParams();
  return (
    <div className="mb-8">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">{params.gender}</Breadcrumb.Item>
        <Breadcrumb.Item>{params.category}</Breadcrumb.Item>
        <Breadcrumb.Item>{params.product}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default ProductDetailsBreadCrumb;
