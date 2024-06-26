import React from "react";
import ProductDetailsBreadCrumb from "../components/productDetails/ProductDetailsBreadCrumb";
import ProductImages from "../components/productDetails/ProductImages";
import ProductDescription from "../components/productDetails/ProductDescription";

function ProductDetails() {
  return (
    <div className="p-8">
      <ProductDetailsBreadCrumb />
      <div className="grid grid-cols-2 gap-4">
        <ProductImages />
        <ProductDescription />
      </div>
    </div>
  );
}

export default ProductDetails;
