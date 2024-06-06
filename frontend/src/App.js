import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./providers/AuthProvider";
import AuthGuard from "./guards/AuthGuard";
import AdminLayout from "./layouts/AdminLayout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import { Flowbite } from "flowbite-react";

function App() {
  const customTheme = {
    button: {
      color: {
        // primary: "bg-red-500 hover:bg-red-600",
      },
    },
    checkbox: {
      root: {
        color: {
          // primary:
            //   "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
        },
      },
    },
  };

  return (
    <BrowserRouter>
      <Flowbite theme={{ theme: customTheme }}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="admin" element={<AdminLayout />}>
                <Route
                  path="todos"
                  element={
                    <AuthGuard>
                      <Todos />
                    </AuthGuard>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <AuthGuard>
                      <Profile />
                    </AuthGuard>
                  }
                />
                <Route
                  path="dashboard"
                  element={
                    <AuthGuard>
                      <Dashboard />
                    </AuthGuard>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Flowbite>
    </BrowserRouter>
  );
}

export default App;
