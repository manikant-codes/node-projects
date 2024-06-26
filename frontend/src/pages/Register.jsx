import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="p-8 flex items-center justify-center">
        <Card className="w-[400px]">
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
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
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirmPassword" value="Confirm password" />
              </div>
              <TextInput id="confirmPassword" type="password" required />
            </div>

            <Button type="submit">Submit</Button>
          </form>
          <div className="text-center">
            <p>or</p>
            <Link to="/login">Login</Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Register;
