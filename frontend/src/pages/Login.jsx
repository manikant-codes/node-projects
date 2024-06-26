import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="p-8 flex items-center justify-center">
      <Card className="w-[400px]">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="youremail@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>

          <Button type="submit">Submit</Button>
        </form>
        <div className="text-center">
          <p>or</p>
          <Link to="/register">Register</Link>
        </div>
      </Card>
    </div>
  );
}

export default Login;
