import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../providers/AuthProvider";
import { BASE_URL } from "../services/apiServices";

function Profile() {
  const { user, removeUser } = useAuth();
  console.log(user);

  const [formState, setFormState] = useState({
    username: user.username,
    password: "",
    confirmPassword: "",
    image: "",
  });

  function handleChange(e) {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      // If it's image.
      setFormState({
        ...formState,
        image: e.target.files[0],
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isPasswordSame = formState.password === formState.confirmPassword;
    if (!isPasswordSame) {
      toast("Passwords don't match!");
      return;
    }

    const formData = new FormData();

    formData.append("image", formState.image);
    formData.append("username", formState.username);
    formData.append("password", formState.password);

    fetch(`${BASE_URL}/users/${user.userId}`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        // "Content-type": "multipart/form-data", // Do not write this. Let the browser decide it.
      },
    });

    removeUser();
  }

  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-bold">Profile</h2>
      <form
        className="bg-slate-50 border-2 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="file-upload" value="Upload file" />
          </div>
          <FileInput
            id="file-upload"
            name="image"
            accept="image/*"
            onChange={handleChange}
            filename={formState.image.name}
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
