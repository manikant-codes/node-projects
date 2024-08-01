import React, { useEffect, useState } from "react";
import CustomBredcrumb from "../components/common/CustomBredcrumb";
import ProductsListCard from "../components/productsList/ProductsListCard";
import Filters from "../components/productsList/filters/Filters";
import { Select } from "flowbite-react";
import { getAllProducts } from "../services/apiServices";
import { useParams } from "react-router-dom";

function ProductsList() {
  const { gender, category } = useParams();
  const [products, setProducts] = useState(null);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    getAllProducts({ gender, category }).then((data) => {
      setProducts(data.data);
    });
  }, []);

  if (!products) return null;

  return (
    <div>
      <div className="px-8 pt-8 flex flex-col gap-4">
        <CustomBredcrumb links={[params.gender, params.category]} />
      </div>
      <div className="grid grid-cols-[226px_1fr] p-8 gap-4">
        <div className="border-r border-r-slate-300 pr-4">
          <Filters />
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4">
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
