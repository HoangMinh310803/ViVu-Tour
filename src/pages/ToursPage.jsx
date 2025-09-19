import React, { useState, useEffect } from "react";
import apiClient from "../apiConfig";
import PaginatedTable from "../components/common/PaginatedTable";
import TourFormModal from "../components/common/TourFormModal";
import TourDetailModal from "../components/common/TourDetailModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";
import { Eye, Edit, Trash2 } from "lucide-react";
import { styles } from "../styles";
import { getTourStatusStyle, getTourStatusText } from "../utils";

const ToursPage = ({ resetToken }) => {
  const [toursList, setToursList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedTour, setSelectedTour] = useState(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Thay thế hàm fetchTours cũ bằng hàm này

  const fetchTours = async () => {
    try {
      setLoading(true);
      // Đã sửa lại endpoint ở đây
      const response = await apiClient.get("/api/Tour/GetAllTours");

      // Kiểm tra xem dữ liệu trả về có phải là một mảng hay không
      if (Array.isArray(response.data)) {
        // Nếu đúng là mảng, gán trực tiếp vào state
        setToursList(response.data);
      } else {
        // Nếu không, báo lỗi
        console.error(
          "Dữ liệu nhận được không phải là một mảng:",
          response.data
        );
        throw new Error("Cấu trúc dữ liệu API trả về không hợp lệ");
      }

      setError(null);
    } catch (err) {
      setError("Không thể tải dữ liệu tour.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const closeModals = () => {
    setSelectedTour(null);
    setIsFormModalOpen(false);
    setIsViewModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleSaveTour = async (tourData) => {
    try {
      if (tourData.tourId) {
        await apiClient.put(`/api/Tour/Edit:${tourData.tourId}`, tourData);
      } else {
        await apiClient.post("/api/Tour/Create", tourData);
      }
      closeModals();
      await fetchTours();
    } catch (err) {
      alert("Lưu tour thất bại!");
      console.error(err);
    }
  };

  const handleConfirmDelete = async () => {
    if (!selectedTour) return;
    try {
      // Đã sửa lại endpoint xóa ở đây
      await apiClient.delete(`/api/Tour/${selectedTour.tourId}`);
      closeModals();
      await fetchTours();
    } catch (err) {
      alert("Xóa tour thất bại!");
      console.error(err);
    }
  };

  const handleAddClick = () => {
    setSelectedTour(null);
    setIsFormModalOpen(true);
  };

  const handleEditClick = (tour) => {
    setSelectedTour(tour);
    setIsFormModalOpen(true);
  };

  const handleViewClick = (tour) => {
    setSelectedTour(tour);
    setIsViewModalOpen(true);
  };

  const handleDeleteClick = (tour) => {
    setSelectedTour(tour);
    setIsDeleteModalOpen(true);
  };

  const columns = [
    {
      key: "tourName",
      header: "Tên Tour",
      width: "35%",
      render: (item) => (
        <span style={{ fontWeight: "500" }}>{item.tourName}</span>
      ),
    },
    { key: "destination", header: "Điểm đến", width: "20%" },
    {
      key: "duration",
      header: "Thời gian",
      width: "15%",
      render: (item) => `${item.duration} ngày`,
    },
    {
      key: "price",
      header: "Giá",
      width: "10%",
      render: (item) => new Intl.NumberFormat("vi-VN").format(item.price) + "đ",
    },
    {
      key: "status",
      header: "Trạng thái",
      width: "10%",
      render: (item) => (
        <span style={getTourStatusStyle(item.status, styles)}>
          {getTourStatusText(item.status)}
        </span>
      ),
    },
  ];

  const renderActions = (tour) => (
    <>
      <button
        title="Xem chi tiết"
        onClick={() => handleViewClick(tour)}
        style={{ ...styles.actionBtn, color: "#14B8A6" }}
      >
        {" "}
        <Eye size={16} />{" "}
      </button>
      <button
        title="Cập nhật"
        onClick={() => handleEditClick(tour)}
        style={{ ...styles.actionBtn, color: "#3b82f6" }}
      >
        {" "}
        <Edit size={16} />{" "}
      </button>
      <button
        title="Xóa"
        onClick={() => handleDeleteClick(tour)}
        style={{ ...styles.actionBtn, color: "#ef4444" }}
      >
        {" "}
        <Trash2 size={16} />{" "}
      </button>
    </>
  );

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Đang tải danh sách tour...
      </div>
    );
  if (error)
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
        {error}
      </div>
    );

  return (
    <>
      <PaginatedTable
        title="Danh sách Tour"
        columns={columns}
        data={toursList}
        buttonLabel="Thêm Tour mới"
        onButtonClick={handleAddClick}
        renderRowActions={renderActions}
        resetToken={resetToken}
      />

      <TourFormModal
        isOpen={isFormModalOpen}
        onClose={closeModals}
        onSave={handleSaveTour}
        initialData={selectedTour}
      />
      <TourDetailModal
        isOpen={isViewModalOpen}
        tour={selectedTour}
        onClose={closeModals}
      />
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeModals}
        onConfirm={handleConfirmDelete}
        itemName={selectedTour?.tourName}
      />
    </>
  );
};

export default ToursPage;
