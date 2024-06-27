import React from "react";
import RowTitle from "../../common/RowTitle";
import CategoryCard from "./CategoryCard";

function CategoriesRow({ categories }) {
  return (
    <div className="p-8">
      <RowTitle title="Shop by Category" />
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </div>
    </div>
  );
}

export default CategoriesRow;
