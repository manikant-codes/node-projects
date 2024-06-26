import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Address from "./pages/user/Address";
import LayoutUser from "./layouts/user/LayoutUser";
import UserAuthGuard from "./guards/UserAuthGuard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path=":gender" element={<Home />} />
          <Route path=":gender/:category" element={<ProductsList />} />
          <Route
            path=":gender/:category/:product"
            element={<ProductDetails />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route
            path="user"
            element={
              <UserAuthGuard>
                <LayoutUser />
              </UserAuthGuard>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="address" element={<Address />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
