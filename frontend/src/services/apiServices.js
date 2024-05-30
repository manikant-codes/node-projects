import { fetchHelper } from "../helpers/fetchHelper";

const BASE_URL = "http://localhost:5000";

// Tasks

export function getAllTasks() {
  return fetchHelper(`${BASE_URL}/tasks`, true);
}

export function addTask(data) {
  return fetchHelper(`${BASE_URL}/tasks`, true, "POST", data);
}

export function deleteTask(id) {
  return fetchHelper(`${BASE_URL}/tasks/${id}`, true, "DELETE");
}

export function updateTask(data) {
  return fetchHelper(`${BASE_URL}/tasks/${data._id}`, true, "PATCH", data);
}

// End Tasks

// Auth

export function registerUser(data) {
  return fetchHelper(`${BASE_URL}/auth/register`, false, "POST", data);
}

export function loginUser(data) {
  return fetchHelper(`${BASE_URL}/auth/login`, false, "POST", data);
}

export function logoutUser() {
  return fetchHelper(`${BASE_URL}/auth/logout`, true);
}

// End Auth

// Dashboard

export function getTasksStats() {
  return fetchHelper(`${BASE_URL}/dashboard/stats`, true);
}

// End Dashboard
