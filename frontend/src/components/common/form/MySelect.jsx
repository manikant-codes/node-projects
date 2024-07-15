import { Label, Select } from "flowbite-react";
import React from "react";
import { getLabelText } from "../../../helpers/formHelper";

function MySelect({ name, label, options, value, onChange }) {
  const labelText = label || getLabelText(name);
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
      <Select id={name} name={name} value={value} onChange={onChange}>
        {options?.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </Select>
    </div>
  );
}

export default MySelect;
