import { Button } from "flowbite-react";
import React from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function CategoryListItem({ category, onDelete }) {
  const navigate = useNavigate();

  function goToEdit() {
    navigate(`/admin/categories/${category._id}`);
  }

  return (
    <div className="flex items-center gap-2 border-b py-4">
      <p className="grow-[1]">{category.category}</p>
      <Button pill onClick={goToEdit}>
        <HiPencil />
      </Button>
      <Button
        pill
        onClick={() => {
          onDelete(category._id);
        }}
      >
        <HiTrash />
      </Button>
    </div>
  );
}

export default CategoryListItem;
