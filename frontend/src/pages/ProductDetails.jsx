import React, { useEffect, useState } from "react";
import ProductDetailsBreadCrumb from "../components/productDetails/ProductDetailsBreadCrumb";
import ProductImages from "../components/productDetails/ProductImages";
import ProductDescription from "../components/productDetails/ProductDescription";
import { getSingleProduct } from "../services/apiServices";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  console.log(params);

  useEffect(() => {
    getSingleProduct(params.product).then((data) => {
      setProduct(data.data);
    });
  }, [params]);

  if (!product) return null;

  console.log(product);

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
