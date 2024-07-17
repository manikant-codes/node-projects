import React from "react";
import MyInput from "../../common/form/MyInput";
import { Button } from "flowbite-react";
import { HiTrash } from "react-icons/hi";

function SubSubCategoryInput({ id, subSubCategory, onRemove, onChange }) {
  return (
    <div className="flex items-end gap-2 ml-8">
      <MyInput
        name="subSubCategory"
        label="Sub Sub Category"
        containerClassName="grow-[1]"
        value={subSubCategory.category}
        onChange={(e) => {
          onChange(e, id, subSubCategory.id || subSubCategory._id);
        }}
      />
      <Button
        size="lg"
        onClick={() => {
          onRemove(id, subSubCategory.id || subSubCategory._id);
        }}
      >
        <HiTrash />
      </Button>
    </div>
  );
}

export default SubSubCategoryInput;
