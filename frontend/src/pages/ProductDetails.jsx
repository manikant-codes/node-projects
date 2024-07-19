import React, { useEffect, useState } from "react";
import ProductDetailsBreadCrumb from "../components/productDetails/ProductDetailsBreadCrumb";
import ProductImages from "../components/productDetails/ProductImages";
import ProductDescription from "../components/productDetails/ProductDescription";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/apiServices";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { product: productId } = useParams();

  useEffect(() => {
    getSingleProduct(productId).then((data) => {
      setProduct(data.data);
    });
  }, []);

  if (!product) return null;

  return (
    <div className="p-8">
      <ProductDetailsBreadCrumb />
      <div className="grid grid-cols-2 gap-4">
        <ProductImages images={product.images} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
