import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { updateUser } from "../services/apiServices";

function Profile() {
  const { user } = useAuth();

  const [formState, setFormState] = useState({
    username: user.username,
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  console.log(formState);

  async function handleSubmit(e) {
    e.preventDefault();
    const isPasswordSame = formState.password === formState.confirmPassword;
    if (!isPasswordSame) {
      toast("Passwords don't match!");
      return;
    }
    const result = await updateUser(user.userId, {
      username: formState.username,
      password: formState.password,
    });

    console.log(result);
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
            <Label htmlFor="email" value="Your email" />
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
