import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.status === 401) {
        sessionStorage.clear()
    }
    return Promise.reject(error);
  });