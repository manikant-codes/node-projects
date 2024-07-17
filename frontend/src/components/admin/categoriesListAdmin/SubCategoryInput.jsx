import React from "react";
import MyInput from "../../common/form/MyInput";
import { Button } from "flowbite-react";
import { HiTrash } from "react-icons/hi";
import SubSubCategoryInput from "./SubSubCategoryInput";

function SubCategoryInput({
  subCategory,
  onAdd,
  onChange,
  onRemove,
  onSubRemove,
  onSubChange,
}) {
  return (
    <div className="flex flex-col gap-2 ml-8">
      <div className="flex items-end gap-2">
        <MyInput
          name="subCategory"
          label="Sub Category"
          containerClassName="grow-[1]"
          value={subCategory.category}
          onChange={(e) => {
            onChange(e, subCategory.id || subCategory._id);
          }}
        />
        <Button
          className="h-fit"
          onClick={() => {
            onAdd(subCategory.id || subCategory._id);
          }}
        >
          Add Sub-Sub-Category
        </Button>
        <Button
          size="lg"
          onClick={() => {
            onRemove(subCategory.id || subCategory._id);
          }}
        >
          <HiTrash />
        </Button>
      </div>
      {subCategory.subCategories.map((subSubCategory) => {
        return (
          <SubSubCategoryInput
            key={subSubCategory.id || subSubCategory._id}
            id={subCategory.id || subCategory._id}
            subSubCategory={subSubCategory}
            onRemove={onSubRemove}
            onChange={onSubChange}
          />
        );
      })}
    </div>
  );
}

export default SubCategoryInput;
