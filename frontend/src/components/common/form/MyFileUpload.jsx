import { Label, TextInput } from "flowbite-react";
import React from "react";
import { getLabelText } from "../../../helpers/formHelper";

function MyFileUpload({ name, label, multiple, onChange }) {
  const labelText = label || getLabelText(name);
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
      <TextInput
        id={name}
        name={name}
        type="file"
        multiple={multiple}
        className="[&>div>input]:py-0"
        onChange={onChange}
      />
    </div>
  );
}

export default MyFileUpload;
