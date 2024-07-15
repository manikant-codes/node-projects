import React from "react";

function MultipleFileUpload() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    for (const file of e.target["images"].files) {
      formData.append("images", file);
    }

    formData.append("images", "http://localhost:3000/women");
    formData.append("images", "http://localhost:3000/women");

    await fetch("http://localhost:5000/products/1", {
      method: "PATCH",
      body: formData,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="images" type="file" multiple />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultipleFileUpload;
