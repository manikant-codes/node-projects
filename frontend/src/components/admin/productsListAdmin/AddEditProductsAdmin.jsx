import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  getSingleProduct,
  updateProduct,
} from "../../../services/apiServices";
import AdminPageTitle from "../../common/AdminPageTitle";
import MyFileUpload from "../../common/form/MyFileUpload";
import MyInput from "../../common/form/MyInput";
import MyMultiCheckboxes from "../../common/form/MyMultiCheckboxes";
import MySelect from "../../common/form/MySelect";
import MyTextarea from "../../common/form/MyTextarea";
import {
  categoryOptions,
  colorsOptions,
  genderOptions,
  getFormattedProductState,
  getNamesArray,
  sizesOptions,
} from "../../../helpers/productsFormHelper";
import MyUploadedImages from "../../common/form/MyUploadedImages";

const initialState = {
  name: "",
  desc: "",
  images: [],
  price: "",
  taxRate: "",
  deliveryCharges: "",
  stock: "",
  gender: "men",
  category: "t-shirt",
  sizes: sizesOptions,
  colors: colorsOptions,
};

function AddEditProductsAdmin() {
  const { id } = useParams();
  const isAdd = id === "add";
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdd) {
      getSingleProduct(id).then((data) => {
        const formattedProduct = getFormattedProductState(data.data);
        setFormState(formattedProduct);
      });
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    for (const key in formState) {
      if (key === "images") {
        for (const value of formState[key]) {
          formData.append("images", value);
        }
        continue;
      }

      if (key === "sizes") {
        const sizesArray = getNamesArray(formState[key]);
        for (const value of sizesArray) {
          formData.append("sizes", value);
        }
        continue;
      }

      if (key === "colors") {
        const colorsArray = getNamesArray(formState[key]);
        for (const value of colorsArray) {
          formData.append("colors", value);
        }
        continue;
      }

      formData.append(key, formState[key]);
    }
    if (isAdd) {
      await addProduct(formData);
    } else {
      await updateProduct(formState._id, formData);
    }

    navigate("/admin/products");
  }

  function handleChange(e) {
    if (e.target.name === "images") {
      return setFormState({
        ...formState,
        [e.target.name]: [...formState.images, ...Array.from(e.target.files)],
      });
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleCheckChange(e, field) {
    const updatedField = formState[field].map((item) => {
      if (item.name === e.target.name) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    console.log(e, field, updatedField);
    setFormState({
      ...formState,
      [field]: updatedField,
    });
  }

  function handleRemoveImage(index) {
    const updatedImages = formState.images.filter((img, i) => index !== i);
    setFormState({ ...formState, images: updatedImages });
  }

  return (
    <div>
      <div>
        <AdminPageTitle title={`${isAdd ? "Add" : "Edit"} Product`} />
      </div>
      <div className="mt-8">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <MyInput name="name" value={formState.name} onChange={handleChange} />
          <MyTextarea
            name="desc"
            label="Description"
            value={formState.desc}
            onChange={handleChange}
          />
          <MyUploadedImages
            images={formState.images}
            remove={handleRemoveImage}
          />
          <MyFileUpload name="images" multiple={true} onChange={handleChange} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MyInput
              name="price"
              type="number"
              value={formState.price}
              onChange={handleChange}
            />
            <MyInput
              name="taxRate"
              label="Tax"
              type="number"
              value={formState.taxRate}
              onChange={handleChange}
            />
            <MyInput
              name="deliveryCharges"
              label="Delivery Charges"
              type="number"
              value={formState.deliveryCharges}
              onChange={handleChange}
            />
            <MyInput
              name="stock"
              type="number"
              value={formState.stock}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MySelect
              name="gender"
              options={genderOptions}
              value={formState.gender}
              onChange={handleChange}
            />
            <MySelect
              name="category"
              options={categoryOptions}
              value={formState.category}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
            <MyMultiCheckboxes
              label="Sizes"
              options={formState.sizes}
              onChange={handleCheckChange}
            />
            <MyMultiCheckboxes
              label="Colors"
              options={formState.colors}
              onChange={handleCheckChange}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default AddEditProductsAdmin;
