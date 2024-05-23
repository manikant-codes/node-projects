import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

function Register() {
  const [state, setState] = useState(0);

  return (
    <div className="h-[calc(100vh-72px-80px)] flex items-center justify-center">
      <form className="bg-cyan-100 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your name" />
            </div>
            <TextInput
              id="username"
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
            <TextInput id="password" type="password" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirm-password" value="Confirm password" />
            </div>
            <TextInput id="confirm-password" type="password" required />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Register;
