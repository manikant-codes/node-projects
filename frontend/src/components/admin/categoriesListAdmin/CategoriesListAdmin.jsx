import React, { useEffect, useState } from "react";
import AdminPageTitle from "../../common/AdminPageTitle";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import {
  deleteCategory,
  getAllCategories,
} from "../../../services/apiServices";
import CategoryListItem from "./CategoryListItem";

function CategoriesListAdmin() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.data);
    });
  }, []);

  function goToAddPage() {
    navigate("/admin/categories/add");
  }

  async function handleDelete(id) {
    const response = window.confirm("Are you sure you want to delete this?");
    if (response) {
      await deleteCategory(id);
      alert("Category deleted!");
      const data = await getAllCategories();
      setCategories(data.data);
    }
  }

  if (!categories) return null;

  return (
    <div>
      <div className="flex items-center justify-between">
        <AdminPageTitle title="Categories" />
        <Button className="h-fit" onClick={goToAddPage}>
          Add Category
        </Button>
      </div>
      <div className="mt-8">
        {categories.map((value) => {
          return (
            <CategoryListItem
              key={value._id}
              category={value}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesListAdmin;
