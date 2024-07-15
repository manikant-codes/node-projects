import { baseURL, fetchHelper } from "../helpers/fetchHelper";

// Auth

function register(data) {
  return fetchHelper(`${baseURL}/auth/register`, "POST", data);
}

function verifyEmail(data) {
  return fetchHelper(`${baseURL}/auth/verify-email`, "POST", data);
}

function login(data) {
  return fetchHelper(`${baseURL}/auth/login`, "POST", data);
}

function logout() {
  return fetchHelper(`${baseURL}/auth/logout`);
}

function forgotPassword(data) {
  return fetchHelper(`${baseURL}/auth/forgot-password`, "POST", data);
}

function resetPassword(data) {
  return fetchHelper(`${baseURL}/auth/reset-password`, "POST", data);
}

// Products

function getAllProducts(query) {
  let filters = [];
  if (query?.gender) {
    filters.push(`gender=${query.gender}`);
  }
  if (query?.category) {
    filters.push(`category=${query.category}`);
  }
  return fetchHelper(`${baseURL}/products?${filters.join("&")}`);
}

function getSingleProduct(id) {
  return fetchHelper(`${baseURL}/products/${id}`);
}

async function addProduct(data) {
  return await fetch(`${baseURL}/products`, {
    method: "POST",
    body: data,
    credentials: "include",
  });
}

async function updateProduct(id, data) {
  return await fetch(`${baseURL}/products/${id}`, {
    method: "PATCH",
    body: data,
    credentials: "include",
  });
}

async function deleteProduct(id) {
  return fetchHelper(`${baseURL}/products/${id}`, "DELETE");
}

export {
  register,
  verifyEmail,
  login,
  logout,
  resetPassword,
  forgotPassword,
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
