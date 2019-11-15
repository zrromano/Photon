import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  // Expected (404: not found, 400: bad request) - CLIENT ERRORS
  //  - Display a specific error message
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // Unexpected (network down, server down, db down, bug)
  //  - Log them
  //  - Display a generic and friendly error message
  if (!expectedError) {
    console.log("Error log: ", error);
    toast.error("An unexpected error occured,");
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
