import http from "./httpService";
import auth from "./authService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    password: user.password,
    email: user.email
  });
}

export function update(user) {
  const currentUser = auth.getCurrentUser();
  return http.put(`${apiEndpoint}/${currentUser._id}`, user);
}

export function deleteCurrentUser(){
  const currentUser = auth.getCurrentUser();
  http.delete(`${apiEndpoint}/${currentUser._id}`);
  auth.logout();
}