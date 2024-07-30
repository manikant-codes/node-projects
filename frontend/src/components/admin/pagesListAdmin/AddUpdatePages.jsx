import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addPage,
  getSinglePage,
  updatePage,
} from "../../../services/apiServices";
import AdminPageTitle from "../../common/AdminPageTitle";
import MyImageUpload from "../../common/form/MyImageUpload";
import MyInput from "../../common/form/MyInput";
import CategoryInput from "./CategoryInput";

const initialState = {
  name: "",
  carouselImages: [],
  categories: [{ id: Date.now(), name: "", displayName: "", image: "" }],
};

function AddUpdatePages() {
  const { id } = useParams();
  const isAdd = id === "add";
  const [formState, setFormState] = useState(isAdd ? initialState : null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdd) {
      getSinglePage(id).then((data) => {
        setFormState(data.data);
      });
    }
  }, []);

  if (!formState) return null;

  console.log("formState", formState);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let data = formState;

    console.log("data", data);

    const formData = new FormData();

    for (const key in data) {
      if (key === "carouselImages") {
        for (const value of data[key]) {
          formData.append("carouselImages", value);
        }
      } else if (key === "categories") {
        for (const value of data[key]) {
          if (typeof value.image === "string") {
            formData.append(value.name, value.image);
          } else {
            formData.append(value.name, value.image[0]);
          }
        }
        let updatedCategories = data[key].map((value) => {
          delete value.image;
          return value;
        });
        formData.append("categories", JSON.stringify(updatedCategories));
      } else {
        if (key === "name") {
          formData.append(key, data[key]);
        }
        if (key === "slug") {
          formData.append("slug", data[key].toLowerCase().replaceAll(" ", "-"));
        }
      }
    }

    if (isAdd) {
      await addPage(formData);
    } else {
      await updatePage(formState._id, formData);
    }

    // navigate("/admin/pages");
  }

  function handleUpload(e) {
    setFormState({
      ...formState,
      carouselImages: [
        ...formState.carouselImages,
        ...Array.from(e.target.files),
      ],
    });
  }

  function handleRemove(index) {
    const updatedField = formState.carouselImages.filter((value, i) => {
      if (i === index) {
        return false;
      }
      return true;
    });
    setFormState({ ...formState, carouselImages: updatedField });
  }

  function handleAddCategory() {
    setFormState({
      ...formState,
      categories: [
        ...formState.categories,
        { id: Date.now(), name: "", displayName: "", image: "" },
      ],
    });
  }

  function handleRemoveCategory(id) {
    const newCategories = formState.categories.filter((value) => {
      if ((isAdd ? value.id : value._id) === id) {
        return false;
      }
      return true;
    });

    setFormState({ ...formState, categories: newCategories });
  }

  function handleCategoryChange(e, id) {
    const updatedCategories = formState.categories.map((value) => {
      if ((isAdd ? value.id : value._id) === id) {
        return { ...value, [e.target.name]: e.target.value };
      }
      return value;
    });
    setFormState({ ...formState, categories: updatedCategories });
  }

  function handleCategoryImageUpload(e, id) {
    const updatedCategories = formState.categories.map((value) => {
      if ((isAdd ? value.id : value._id) === id) {
        return { ...value, [e.target.name]: e.target.files };
      }
      return value;
    });
    setFormState({ ...formState, categories: updatedCategories });
  }

  function handleCategoryImageRemove(index, id) {
    const updatedCategories = formState.categories.map((value) => {
      if ((isAdd ? value.id : value._id) === id) {
        return { ...value, image: "" };
      }
      return value;
    });
    setFormState({ ...formState, categories: updatedCategories });
  }

  return (
    <div>
      <AdminPageTitle title={isAdd ? "Add Page" : "Update Page"} />
      <div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <MyInput name="name" value={formState.name} onChange={handleChange} />
          <MyImageUpload
            name="carouselImages"
            multiple={true}
            onChange={handleUpload}
            remove={handleRemove}
            images={formState.carouselImages}
          />
          <div className="flex justify-end">
            <Button onClick={handleAddCategory}>Add Category</Button>
          </div>
          {formState.categories.map((value) => {
            return (
              <CategoryInput
                onRemove={handleRemoveCategory}
                value={value}
                onChange={handleCategoryChange}
                onUpload={handleCategoryImageUpload}
                onImageRemove={handleCategoryImageRemove}
              />
            );
          })}

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default AddUpdatePages;
