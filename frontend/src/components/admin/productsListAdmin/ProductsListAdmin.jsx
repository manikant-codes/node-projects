import { Button } from "flowbite-react";
import React from "react";
import AdminPageTitle from "../../common/AdminPageTitle";

function ProductsListAdmin() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <AdminPageTitle title="Products" />
        <Button className="h-fit">Add Product</Button>
      </div>
    </div>
  );
}

export default ProductsListAdmin;
