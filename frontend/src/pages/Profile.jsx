import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../providers/AuthProvider";
import { BASE_URL, updateUser } from "../services/apiServices";
import { getBase64 } from "../helpers/imageHelper";

function Profile() {
  const { user, removeUser } = useAuth();

  const [formState, setFormState] = useState({
    username: user.username,
    password: "",
    confirmPassword: "",
    imageBase64: "",
    imageFile: "",
  });

  function handleChange(e) {
    // If it's image.
    if (e.target.files && e.target.files[0]) {
      getBase64(e.target.files[0], (base64) => {
        setFormState({
          ...formState,
          imageBase64: base64,
          imageFile: e.target.files[0],
        });
      });
    }

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isPasswordSame = formState.password === formState.confirmPassword;
    if (!isPasswordSame) {
      toast("Passwords don't match!");
      return;
    }

    const formData = new FormData();

    formData.append("image", formState.imageFile);
    formData.append("username", formState.username);
    formData.append("password", formState.password);

    fetch(`${BASE_URL}/users/${user.userId}`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "multipart/form-data",
      },
    });

    // const result = await updateUser(user.userId, {
    //   username: formState.username,
    //   password: formState.password,
    // });

    // removeUser();
  }

  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-bold">Profile</h2>
      <form
        className="bg-slate-50 border-2 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <img src={formState.image} alt="" className="h-[50px] w-[50px]" />
          <div className="mb-2 block">
            <Label htmlFor="file-upload" value="Upload file" />
          </div>
          <FileInput
            name="image"
            id="file-upload"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            name="username"
            placeholder=""
            required
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="New password" />
          </div>
          <TextInput
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmPassword" value="Confirm password" />
          </div>
          <TextInput
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            required
            onChange={handleChange}
          />
        </div>
        <Button gradientDuoTone="purpleToBlue" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Profile;
