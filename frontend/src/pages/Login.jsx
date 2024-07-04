import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { login, logout } from "../services/apiServices";

function Login() {
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const data = {
        email: e.target["email"].value,
        password: e.target["password"].value,
      };

      const response = await login(data);

      await logout();
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div className="p-8 flex items-center justify-center">
      <Card className="w-[400px]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="youremail@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" name="password" type="password" required />
          </div>

          <Button type="submit">Submit</Button>
        </form>
        <div className="text-center">
          <p>or</p>
          <Link to="/register">Register</Link>
          <br />
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </Card>
    </div>
  );
}

export default Login;
