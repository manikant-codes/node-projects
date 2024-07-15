import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { register } from "../services/apiServices";

function Register() {
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      if (e.target["password"].value !== e.target["confirmPassword"].value) {
        alert("Passwords did not match!");
      }

      const data = {
        fname: e.target["fname"].value,
        lname: e.target["lname"].value,
        email: e.target["email"].value,
        password: e.target["password"].value,
      };

      const response = await register(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div>
      <div className="p-8 flex items-center justify-center">
        <Card className="w-[400px]">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fname" value="First name" />
                </div>
                <TextInput
                  id="fname"
                  type="text"
                  name="fname"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lname" value="Last name" />
                </div>
                <TextInput
                  id="lname"
                  type="text"
                  name="lname"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
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
              <TextInput
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirmPassword" value="Confirm password" />
              </div>
              <TextInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
              />
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
