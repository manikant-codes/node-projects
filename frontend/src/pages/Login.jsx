import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();
    const data = {};
    data.email = e.target["email"].value;
    data.password = e.target["password"].value;
    login(data);
  }

  return (
    <div className="h-[calc(100vh-72px-80px)] flex items-center justify-center">
      <form
        className="bg-slate-50 border-2 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" name="password" required />
        </div>
        <Button gradientDuoTone="purpleToBlue" type="submit">
          Submit
        </Button>
        <p className="text-center">OR</p>
        <Link className="text-center" to="/register">
          Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
