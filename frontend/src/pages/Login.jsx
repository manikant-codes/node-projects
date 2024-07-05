import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.user;
  });

  console.log("user", user);

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const data = {
        email: e.target["email"].value,
        password: e.target["password"].value,
      };

      // const response = await login(data);
      dispatch(getUser(data));
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  function toggleShow() {
    setShowPassword(!showPassword);
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
            <div className="relative">
              <TextInput
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="[&>div>input]:pr-[33px]"
              />
              {showPassword ? (
                <HiEyeOff
                  onClick={toggleShow}
                  className="text-2xl cursor-pointer absolute top-[50%] translate-y-[-50%] right-[8px]"
                />
              ) : (
                <HiEye
                  onClick={toggleShow}
                  className="text-2xl cursor-pointer absolute top-[50%] translate-y-[-50%] right-[8px]"
                />
              )}
            </div>
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
