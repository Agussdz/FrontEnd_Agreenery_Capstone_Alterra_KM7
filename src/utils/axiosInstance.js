import axios from "axios";
import useLoginStore from "../stores/useLoginStore";

// Membuat instance axios
const axiosInstance = axios.create({
  baseURL: "https://agreenery.cloud/api/v1",
});

// Interceptor untuk menambahkan token di setiap request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useLoginStore.getState().token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;