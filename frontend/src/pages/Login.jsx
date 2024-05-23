import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

function Login() {
  return (
    <div className="h-[calc(100vh-72px-80px)] flex items-center justify-center">
      <form className="bg-cyan-100 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4">
        <div>
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Login;
