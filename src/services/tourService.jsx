// src/services/tourService.js
import axios from "axios";
import apiClient from "../apiConfig";

export const getAllTours = async () => {
  try {
    const response = await apiClient.get("/api/Tour/GetAllTours");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi fetch tours:", error);
    throw error;
  }
};

// Lấy detail tour theo id
export const getTourById = async (id) => {
  try {
    const response = await apiClient.get(`/api/Tour/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi fetch tour detail:", error);
    throw error;
  }
};
