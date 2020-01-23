import http from "./httpService";
import auth from "./authService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    password: user.password,
    email: user.email
  });
}

export function update(user) {
  return http.put(`${apiEndpoint}/me`, user);
}

export function deleteCurrentUser() {
  const response = http.delete(`${apiEndpoint}/me`);
  auth.logout();
  return response;
}
