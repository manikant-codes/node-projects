import { Label, Textarea } from "flowbite-react";
import React from "react";
import { getLabelFromName } from "../../../helpers/productsFormHelper";

function MyTextarea({ name, label, value, onChange, ...others }) {
  const labelText = label || getLabelFromName(name);
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{labelText}</Label>
      <Textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...others}
      />
    </div>
  );
}

export default MyTextarea;
