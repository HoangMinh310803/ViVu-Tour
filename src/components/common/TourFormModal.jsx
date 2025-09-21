import React, { useState, useEffect } from "react";
import { X as XIcon } from "lucide-react";
import { styles } from "../../styles";

const TourFormModal = ({ isOpen, onClose, onSave, initialData }) => {
  // 1. Khởi tạo state với đầy đủ các trường, bao gồm cả tourId
  const [formData, setFormData] = useState({
    tourId: null,
    tourName: "",
    destination: "",
    description: "",
    duration: 0,
    price: 0,
    maxParticipants: 0,
    startDate: "",
    endDate: "",
    status: "Active",
    transport: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (isOpen && initialData) {
      // Khi edit, đảm bảo toàn bộ dữ liệu (bao gồm tourId) được đưa vào form state
      setFormData({
        ...initialData,
        startDate: initialData.startDate
          ? initialData.startDate.split("T")[0]
          : "",
        endDate: initialData.endDate ? initialData.endDate.split("T")[0] : "",
      });
    } else {
      // Khi add, reset state về giá trị ban đầu (với tourId là null)
      setFormData({
        tourId: null,
        tourName: "",
        destination: "",
        description: "",
        duration: 0,
        price: 0,
        maxParticipants: 0,
        startDate: "",
        endDate: "",
        status: "Active",
        transport: "",
        thumbnail: "",
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value, 10) || 0 : value,
    }));
  };

  const handleSave = () => {
    // 2. Khi lưu, formData bây giờ vẫn chứa tourId nếu đang ở chế độ edit
    onSave(formData);
  };

  if (!isOpen) return null;
  const isEditMode = !!initialData;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div
        style={{ ...styles.modalContainer, maxWidth: "600px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>
            {isEditMode ? "Cập nhật Tour" : "Thêm Tour Mới"}
          </h3>
          <button onClick={onClose} style={styles.modalCloseButton}>
            <XIcon size={20} />
          </button>
        </div>
        <div style={styles.modalBody}>
          {/* Các trường input không thay đổi */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Tên Tour</label>
            <input
              type="text"
              name="tourName"
              value={formData.tourName}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Điểm đến</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Mô tả</label>
            <textarea
              rows="3"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={styles.formTextarea}
            ></textarea>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Thời gian (ngày)</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Giá (VNĐ)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Số khách tối đa</label>
              <input
                type="number"
                name="maxParticipants"
                value={formData.maxParticipants}
                onChange={handleChange}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Trạng thái</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                style={styles.formSelect}
              >
                <option value="Active">Hoạt động</option>
                <option value="Inactive">Tạm dừng</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Ngày bắt đầu</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                style={styles.formInput}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Ngày kết thúc</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                style={styles.formInput}
              />
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Phương tiện</label>
            <input
              type="text"
              name="transport"
              value={formData.transport}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
        </div>
        <div style={styles.modalFooter}>
          <button onClick={onClose} style={styles.secondaryButton}>
            Hủy
          </button>
          <button onClick={handleSave} style={styles.primaryButton}>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourFormModal;
