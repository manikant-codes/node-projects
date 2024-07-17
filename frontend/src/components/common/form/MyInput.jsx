import { Label, TextInput } from "flowbite-react";
import { getLabelText } from "../../../helpers/formHelper";

function MyInput({
  name,
  label,
  type = "text",
  value,
  onChange,
  containerClassName,
  ...others
}) {
  const labelText = label || getLabelText(name);
  return (
    <div className={"flex flex-col gap-1 " + containerClassName}>
      <Label htmlFor={name}>{labelText}</Label>
      <TextInput
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        {...others}
      />
    </div>
  );
}

export default MyInput;
