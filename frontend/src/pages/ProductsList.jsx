import { Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomBredcrumb from "../components/common/CustomBredcrumb";
import ProductsListCard from "../components/productsList/ProductsListCard";
import Filters from "../components/productsList/filters/Filters";
import { getAllProducts } from "../services/apiServices";

function ProductsList() {
  const [products, setProducts] = useState(null);
  const { gender, category } = useParams();

  useEffect(() => {
    getAllProducts({ gender, category }).then((data) => {
      setProducts(data.data);
    });
  }, []);

  if (!products) return null;

  return (
    <div className="p-8">
      <div>
        <CustomBredcrumb
          items={[
            { text: gender, link: "" },
            { text: category, link: "" },
          ]}
        />
      </div>
      <div className="grid grid-cols-[226px_1fr] gap-4">
        <Filters />
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <p>Bundles</p>
              <p>Country of Origin</p>
              <p>Size</p>
              <p></p>
            </div>
            <div>
              <Select>
                <option>Recomended</option>
                <option>Whats New</option>
                <option>Popularity</option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
