import { Button } from "flowbite-react";
import React from "react";
import CheckboxFilters from "./CheckboxFilters";
import ColorLable from "./ColorLable";
import { clothesColors } from "../../../data/productsList";

function Filters() {
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <h2>Filters</h2>
        <Button>Clear All</Button>
      </div>
      <CheckboxFilters
        title="Categories"
        categories={[
          "Kalidar Kurtas",
          "Straight Kurtas",
          "A-line Kurtas",
          "Anarkali Kurtas",
          "Asymmetric Kurtas",
        ]}
      />
      <CheckboxFilters
        title="Brand"
        categories={[
          "Jaipur Kurti",
          "Nykaa Fashion",
          "PaisaWapas Blog",
          "Cashaly",
          "KALKI Fashion",
        ]}
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
        categories={clothesColors.map((color) => {
          return <ColorLable color={color.color} colorName={color.colorName} />;
        })}
      />
    </div>
  );
}

export default Filters;
