import axios, { InternalAxiosRequestConfig } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.request.use(function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig  {
  const token = sessionStorage.getItem("sessionToken");
  config.headers.setAuthorization(`Bearer ${token}`)
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.status === 401) {
    sessionStorage.clear()
  }
  return Promise.reject(error);
});
