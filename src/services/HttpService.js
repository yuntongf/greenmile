import axios from "axios";
import { toast } from "react-toastify";
import auth from "./AuthService";

/*if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  "https://amb-back.herokuapp.com"
}*/

axios.defaults.headers.common['x-token'] = localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.response.use(null, (e) => {
  const expectedError =
    e.response && e.response.status >= 400 && e.response.status < 500;
  if (!expectedError) {
    console.log("logging the error", e);
    toast.error("an unexpected error occured...");
  }
  return Promise.reject(e);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
