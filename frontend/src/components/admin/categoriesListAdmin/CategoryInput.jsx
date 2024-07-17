import React from "react";
import MyInput from "../../common/form/MyInput";
import { Button } from "flowbite-react";

function CategoryInput({ value, onChange, onAdd }) {
  return (
    <div className="flex items-end gap-2 grow-[1]">
      <MyInput
        name="category"
        containerClassName="grow-[1]"
        value={value}
        onChange={onChange}
      />
      <Button className="h-fit" onClick={onAdd}>
        Add Sub-Category
      </Button>
    </div>
  );
}

export default CategoryInput;
