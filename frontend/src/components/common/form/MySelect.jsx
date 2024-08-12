import { Label, Select } from "flowbite-react";
import React from "react";
import { getLabelFromName } from "../../../helpers/productsFormHelper";

function MySelect({ name, label, options, value = "", onChange }) {
  const labelText = label || getLabelFromName(name);
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{labelText}</Label>
      <Select id={name} name={name} value={value} onChange={onChange}>
        {options?.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </Select>
    </div>
  );
}

export default MySelect;
