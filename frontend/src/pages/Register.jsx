import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function Register() {
  const { register } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target["password"].value !== e.target["confirmPassword"].value) {
      alert("Passwords did not match!");
      return;
    }

    const data = {};
    data.username = e.target["username"].value;
    data.email = e.target["email"].value;
    data.password = e.target["password"].value;

    register(data);
  }

  return (
    <div
      className="h-[calc(100vh-72px-80px)] flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <form className="bg-slate-50 border-2 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your name" />
            </div>
            <TextInput
              id="username"
              name="username"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
        </div>
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" name="password" type="password" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirm-password" value="Confirm password" />
            </div>
            <TextInput
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
            />
          </div>
        </div>
        <Button gradientDuoTone="purpleToBlue" type="submit">
          Submit
        </Button>
        <p className="text-center">OR</p>
        <Link to="/login" className="text-center">
          Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
