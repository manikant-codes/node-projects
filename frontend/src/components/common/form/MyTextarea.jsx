import { Label, Textarea } from "flowbite-react";
import React from "react";
import { getLabelText } from "../../../helpers/formHelper";

function MyTextarea({ name, label, value, onChange }) {
  const labelText = label || getLabelText(name);
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
      <Textarea id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default MyTextarea;
