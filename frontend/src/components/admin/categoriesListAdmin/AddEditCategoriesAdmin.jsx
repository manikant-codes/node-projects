import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminPageTitle from "../../common/AdminPageTitle";
import CategoryInput from "./CategoryInput";
import SubCategoryInput from "./SubCategoryInput";
import { Button } from "flowbite-react";
import {
  addCategory,
  getSingleCategory,
  updateCategory,
} from "../../../services/apiServices";

const initialState = {
  category: "",
  subCategories: [],
};

function AddEditCategoriesAdmin() {
  const { id } = useParams();
  const isAdd = id === "add";
  const navigate = useNavigate();

  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    if (!isAdd) {
      getSingleCategory(id).then((data) => {
        setFormState(data.data);
      });
    }
  }, []);

  function handleAddSubCategory() {
    setFormState({
      ...formState,
      subCategories: [
        ...formState.subCategories,
        { id: Date.now(), category: "", subCategories: [] },
      ],
    });
  }

  function handleRemoveSubCategory(id) {
    const updatedSubCategories = formState.subCategories.filter((value) => {
      return (value.id || value._id) !== id;
    });
    setFormState({ ...formState, subCategories: updatedSubCategories });
  }

  function handleAddSubSubCategory(id) {
    const updatedSubCategories = formState.subCategories.map((value) => {
      if ((value.id || value._id) === id) {
        return {
          ...value,
          subCategories: [
            ...value.subCategories,
            { id: Date.now(), category: "" },
          ],
        };
      }
      return value;
    });
    setFormState({ ...formState, subCategories: updatedSubCategories });
  }

  function handleRemoveSubSubCategory(id, subId) {
    const updatedSubCategories = formState.subCategories.map((value) => {
      if ((value.id || value._id) === id) {
        const updatedSubSubCategories = value.subCategories.filter((v) => {
          return (v.id || v._id) !== subId;
        });
        return { ...value, subCategories: updatedSubSubCategories };
      }
      return value;
    });
    setFormState({ ...formState, subCategories: updatedSubCategories });
  }

  function handleCategoryChange(e) {
    setFormState({ ...formState, category: e.target.value });
  }

  function handleSubCategoryChange(e, id) {
    const updatedSubCategories = formState.subCategories.map((value) => {
      if ((value.id || value._id) === id) {
        return { ...value, category: e.target.value };
      }
      return value;
    });
    setFormState({ ...formState, subCategories: updatedSubCategories });
  }

  function handleSubSubCategoryChange(e, id, subId) {
    const updatedSubCategories = formState.subCategories.map((value) => {
      if ((value.id || value._id) === id) {
        const updatedSubSubCategories = value.subCategories.map((v) => {
          if ((v.id || v._id) === subId) {
            return { ...v, category: e.target.value };
          }
          return v;
        });
        value.subCategories = updatedSubSubCategories;
      }
      return value;
    });

    setFormState({ ...formState, subCategories: updatedSubCategories });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response;
      if (isAdd) {
        response = await addCategory(formState);
      } else {
        response = await updateCategory(formState._id, formState);
      }
      console.log("Response: ", response);
      navigate("/admin/categories");
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div>
      <AdminPageTitle title={isAdd ? "Add Category" : "Edit Category"} />

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <CategoryInput
            value={formState.category}
            onChange={handleCategoryChange}
            onAdd={handleAddSubCategory}
          />
          {formState.subCategories.map((subCategory, index) => {
            return (
              <SubCategoryInput
                key={subCategory.id || subCategory._id}
                subCategory={subCategory}
                onRemove={handleRemoveSubCategory}
                onChange={handleSubCategoryChange}
                onAdd={handleAddSubSubCategory}
                onSubRemove={handleRemoveSubSubCategory}
                onSubChange={handleSubSubCategoryChange}
              />
            );
          })}
          <Button type="submit" className="mt-8">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddEditCategoriesAdmin;
