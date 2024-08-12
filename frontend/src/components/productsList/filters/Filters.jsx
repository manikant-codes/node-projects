import { Button } from "flowbite-react";
import React from "react";
import CheckboxFilters from "./CheckboxFilters";
import ColorLable from "./ColorLable";
import { clothesColors } from "../../../data/productsList";
import { HiFilter } from "react-icons/hi";

function Filters() {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h2 className="flex items-center gap-1 font-bold text-lg">
          <HiFilter />
          <span>Filters</span>
        </h2>
        <Button size="sm" pill>
          Clear All
        </Button>
      </div>
      <CheckboxFilters
        title="Size"
        categories={["xs", "sm", "md", "lg", "xl", "xl", "xxl"]}
      />
      <CheckboxFilters
        title="Price"
        categories={[
          "0 - 100",
          "100 - 500",
          "500 - 1000",
          "1000 - 2000",
          "2000 - 5000",
        ]}
      />
      <CheckboxFilters
        title="Color"
        categories={clothesColors.map((color, index) => {
          return (
            <ColorLable
              key={index}
              color={color.color}
              colorName={color.colorName}
            />
          );
        })}
      />
    </div>
  );
}

export default Filters;
