import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountAdmin from "./components/admin/accountAdmin/AccountAdmin";
import DashboardAdmin from "./components/admin/dashboardAdmin/DashboardAdmin";
import OrdersListAdmin from "./components/admin/ordersListAdmin/OrdersListAdmin";
import ProductsListAdmin from "./components/admin/productsListAdmin/ProductsListAdmin";
import UsersListAdmin from "./components/admin/usersListAdmin/UsersListAdmin";
import UserAuthGuard from "./guards/UserAuthGuard";
import LayoutMain from "./layouts/LayoutMain";
import LayoutAdmin from "./layouts/admin/LayoutAdmin";
import LayoutUser from "./layouts/user/LayoutUser";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Wishlist from "./pages/Wishlist";
import Address from "./pages/user/Address";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import store from "./redux/store";
import AddUpdateProducts from "./components/admin/productsListAdmin/AddUpdateProducts";
import PagesListAdmin from "./components/admin/pagesListAdmin/PagesListAdmin";
import AddUpdatePages from "./components/admin/pagesListAdmin/AddUpdatePages";

function App() {
  return (
    <Provider store={store}>
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
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
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
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="dashboard" element={<DashboardAdmin />} />
            <Route path="pages" element={<PagesListAdmin />} />
            <Route path="pages/:id" element={<AddUpdatePages />} />
            <Route path="products" element={<ProductsListAdmin />} />
            <Route path="products/:id" element={<AddUpdateProducts />} />
            <Route path="orders" element={<OrdersListAdmin />} />
            <Route path="users" element={<UsersListAdmin />} />
            <Route path="account" element={<AccountAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
