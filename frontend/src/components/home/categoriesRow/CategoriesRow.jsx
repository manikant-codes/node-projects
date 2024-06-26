import React from "react";
import RowTitle from "../../common/RowTitle";
import CategoryCard from "./CategoryCard";

function CategoriesRow() {
  return (
    <div className="p-8">
      <RowTitle title="Shop by Category" />
      <div className="grid grid-cols-4 gap-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default CategoriesRow;
