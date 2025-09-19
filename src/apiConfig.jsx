// src/apiConfig.js
import axios from "axios";

export const BASE_URL = "http://tourapi.somee.com/";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
