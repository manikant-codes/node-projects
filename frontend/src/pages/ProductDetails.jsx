import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomBredcrumb from "../components/common/CustomBredcrumb";
import ProductDescription from "../components/productDetails/ProductDescription";
import ProductImages from "../components/productDetails/ProductImages";
import { getSingleProduct } from "../services/apiServices";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    getSingleProduct(params.product).then((data) => {
      setProduct(data.data);
    });
  }, [params.product]);

  if (!product) return null;

  return (
    <div className="p-8">
      <CustomBredcrumb links={[params.page, params.category, params.product]} />
      <div className="gap-8 grid grid-cols-2">
        <ProductImages images={product.images} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
