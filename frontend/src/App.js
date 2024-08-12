import { Flowbite } from "flowbite-react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuthGuard from "./guards/UserAuthGuard";
import LayoutAdmin from "./layouts/admin/LayoutAdmin";
import LayoutMain from "./layouts/main/LayoutMain";
import LayoutUser from "./layouts/user/LayoutUser";
import Checkout from "./pages/Checkout";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Wishlist from "./pages/Wishlist";
import AccountAdmin from "./pages/admin/AccountAdmin";
import AddUpdatePages from "./pages/admin/AddUpdatePages";
import AddUpdateProducts from "./pages/admin/AddUpdateProducts";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import OrdersListAdmin from "./pages/admin/OrdersListAdmin";
import PagesListAdmin from "./pages/admin/PagesListAdmin";
import ProductsListAdmin from "./pages/admin/ProductsListAdmin";
import UsersListAdmin from "./pages/admin/UsersListAdmin";
import Address from "./pages/user/Address";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import store from "./redux/store";
import { customTheme } from "./theme/customTheme";
import CategoriesListAdmin from "./pages/admin/CategoriesListAdmin";
import FiltersListAdmin from "./pages/admin/FiltersListAdmin";

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutMain />}>
              <Route index element={<Home />} />
              <Route path=":page" element={<Home />} />
              <Route path=":page/:category" element={<ProductsList />} />
              <Route
                path=":page/:category/:product"
                element={<ProductDetails />}
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="verify-email" element={<VerifyEmail />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route
                path="checkout"
                element={
                  <UserAuthGuard>
                    <Checkout />
                  </UserAuthGuard>
                }
              />
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
            <Route
              path="/admin"
              element={
                <UserAuthGuard>
                  <LayoutAdmin />
                </UserAuthGuard>
              }
            >
              <Route path="dashboard" element={<DashboardAdmin />} />
              <Route path="pages" element={<PagesListAdmin />} />
              <Route path="pages/:id" element={<AddUpdatePages />} />
              <Route path="products" element={<ProductsListAdmin />} />
              <Route path="categories" element={<CategoriesListAdmin />} />
              <Route path="filters" element={<FiltersListAdmin />} />
              <Route path="products/:id" element={<AddUpdateProducts />} />
              <Route path="orders" element={<OrdersListAdmin />} />
              <Route path="users" element={<UsersListAdmin />} />
              <Route path="account" element={<AccountAdmin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </Flowbite>
  );
}

export default App;
