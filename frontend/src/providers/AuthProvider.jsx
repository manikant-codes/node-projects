import React, { createContext, useContext, useState } from "react";
import { loginUser, logoutUser, registerUser } from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

function AuthProvider({ children }) {
  let initialUser = JSON.parse(localStorage.getItem("user"));
  initialUser = initialUser && initialUser.data;

  const [user, setUser] = useState(initialUser);

  const navigate = useNavigate();

  async function login(data) {
    const result = await loginUser(data);
    if (result.success) {
      localStorage.setItem("user", JSON.stringify(result));
      setUser(result.data);
      navigate("/admin/todos");
    } else {
      localStorage.removeItem("user");
      toast(result.msg);
    }
  }

  async function register(data) {
    const result = await registerUser(data);
    if (result.success) {
      localStorage.setItem("user", JSON.stringify(result));
      setUser(result.data);
      navigate("/admin/todos");
    } else {
      localStorage.removeItem("user");
      toast(result.msg);
    }
  }

  async function logout() {
    const result = await logoutUser();
    if (result.success) {
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } else {
      toast(result.msg);
    }
  }

  // const notify = () => toast("Wow so easy!");

  return (
    <authContext.Provider value={{ user, login, register, logout }}>
      {children}
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </authContext.Provider>
  );
}

export default AuthProvider;
