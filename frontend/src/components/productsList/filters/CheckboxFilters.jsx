import { Checkbox } from "flowbite-react";
import React from "react";

function CheckboxFilters({ title, categories }) {
  return (
    <div className="border-t-[1px] border-slate-200 py-4">
      <h4 className="mb-2 font-bold">{title}</h4>
      <ul className="flex flex-col gap-2">
        {categories.map((value, index) => {
          return (
            <li className="flex items-center gap-2">
              <Checkbox />
              <p>{value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CheckboxFilters;
