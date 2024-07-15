import { Label, TextInput } from "flowbite-react";
import React from "react";
import { getLabelText } from "../../../helpers/formHelper";

function MyInput({ name, label, type = "text", value, onChange }) {
  const labelText = label || getLabelText(name);
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
      <TextInput
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default MyInput;
