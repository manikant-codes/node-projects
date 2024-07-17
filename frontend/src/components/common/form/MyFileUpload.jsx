import { Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { getLabelText } from "../../../helpers/formHelper";
import MyUploadedImages from "./MyUploadedImages";

function MyFileUpload({ name, label, multiple, images, onChange, remove }) {
  const labelText = label || getLabelText(name);
  const [imgs, setImgs] = useState(images);

  function handleAddImgs(e) {
    const urls = [];
    for (const file of e.target.files) {
      urls.push(URL.createObjectURL(file));
    }
    setImgs([...imgs, ...urls]);
  }

  function handleRemoveImg(index) {
    const updatedImgs = imgs.filter((value, i) => {
      return i !== index;
    });
    setImgs(updatedImgs);
  }

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{labelText}</Label>
      <MyUploadedImages
        images={imgs}
        remove={(index) => {
          remove(index);
          handleRemoveImg(index);
        }}
      />
      <TextInput
        id={name}
        name={name}
        type="file"
        multiple={multiple}
        className="[&>div>input]:py-0 mt-1"
        onChange={(e) => {
          onChange(e);
          handleAddImgs(e);
        }}
      />
    </div>
  );
}

export default MyFileUpload;
