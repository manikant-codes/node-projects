import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminPageTitle from "../../common/AdminPageTitle";
import MyImageUpload from "../../common/form/MyImageUpload";
import MyInput from "../../common/form/MyInput";

const initialState = {
  name: "",
  carouselImages: [],
  categories: [],
};

function AddUpdatePages() {
  const { id } = useParams();
  const isAdd = id === "add";
  const [formState, setFormState] = useState(isAdd ? initialState : null);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    let data = {};

    for (const key in data) {
    }

    if (isAdd) {
      //   await addProduct(formData);
    } else {
      //   await updateProduct(formState._id, formData);
    }

    navigate("/admin/pages");
  }

  function handleUpload(e) {
    setFormState({
      ...formState,
      images: [...formState.carouselImages, ...Array.from(e.target.files)],
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
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default AddUpdatePages;
