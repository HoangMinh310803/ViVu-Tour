// src/services/tourService.js
import apiClient from "../apiConfig";

export const getAllTours = async () => {
  try {
    const response = await apiClient.get("/api/Tour/GetAllTours");
    // Trả về trực tiếp mảng dữ liệu
    return response.data;
  } catch (error) {
    console.error("Lỗi khi fetch tours:", error);
    throw error;
  }
};

export const getTourById = async (id) => {
  try {
    const response = await apiClient.get(`/api/Tour/${id}`);
    // Trả về trực tiếp đối tượng tour
    return response.data;
  } catch (error) {
    console.error("Lỗi khi fetch tour detail:", error);
    throw error;
  }
};

export const getTourSearch = async (keyword) => {
  try {
    const params = {};
    if (keyword && keyword.trim() !== "") {
      params.keyword = keyword.trim();
    }
    const response = await apiClient.get("/api/Tour/search", { params });
    // Trả về trực tiếp mảng dữ liệu
    return response.data;
  } catch (error) {
    console.error("Lỗi khi search tours:", error);
    throw error;
  }
};
