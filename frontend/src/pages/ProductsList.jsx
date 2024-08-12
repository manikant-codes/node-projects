import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomBredcrumb from "../components/common/CustomBredcrumb";
import ProductsListCard from "../components/productsList/ProductsListCard";
import Filters from "../components/productsList/filters/Filters";
import { getAllProducts } from "../services/apiServices";

function ProductsList() {
  const { page, category } = useParams();
  const [products, setProducts] = useState(null);
  const params = useParams();

  useEffect(() => {
    getAllProducts({ page, category }).then((data) => {
      setProducts(data.data);
    });
  }, [category, page]);

  if (!products) return null;

  return (
    <div className="p-8">
      <CustomBredcrumb links={[params.page, params.category]} />
      <div className="gap-4 grid grid-cols-[256px_1fr]">
        <div className="pr-4 border-r border-r-slate-300">
          <Filters />
        </div>
        <div>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              return <ProductsListCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
