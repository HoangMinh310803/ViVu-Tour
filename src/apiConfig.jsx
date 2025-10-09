// src/apiConfig.js
import axios from "axios";

export const BASE_URL = "https://bookingtour20251004231811-fddtasa2a9gpeubz.canadacentral-01.azurewebsites.net/";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



export default apiClient;
