import React from "react";
import CustomBredcrumb from "../components/common/CustomBredcrumb";
import ProductsListCard from "../components/productsList/ProductsListCard";
import Filters from "../components/productsList/filters/Filters";
import { Select } from "flowbite-react";

function ProductsList() {
  return (
    <div>
      <div className="p-8 flex flex-col gap-4">
        <CustomBredcrumb />
        <p>Kids Wear Online Store - 43851 items</p>
      </div>
      <div className="grid grid-cols-[226px_1fr] p-8 gap-4">
        <div className="">
          <Filters />
        </div>
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
          <div className="grid grid-cols-4 gap-4">
            {[...Array(10)].map(() => {
              return <ProductsListCard />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
