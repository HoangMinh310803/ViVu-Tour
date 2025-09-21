import React, { useState, useEffect } from "react";
import { X as XIcon } from "lucide-react";
import { styles } from "../../styles";

const CustomerFormModal = ({ isOpen, onClose, onSave, initialData }) => {
  // Sửa: Cập nhật cấu trúc state để khớp với API
  const getInitialFormData = () => ({
    fullName: "",
    email: "",
    phone: "",
    isActive: true, // Mặc định là true (Hoạt động)
  });

  const [formData, setFormData] = useState(getInitialFormData());

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        // Điền dữ liệu có sẵn vào form khi sửa, đảm bảo đúng tên thuộc tính
        setFormData({
          userId: initialData.userId, // Giữ lại userId để biết đây là chế độ sửa
          fullName: initialData.fullName || "",
          email: initialData.email || "",
          phone: initialData.phone || "",
          isActive: initialData.isActive,
        });
      } else {
        // Reset form về trạng thái ban đầu khi thêm mới
        setFormData(getInitialFormData());
      }
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Xử lý cho checkbox hoặc các loại input khác
    const newValue = type === "checkbox" ? checked : value;

    // Xử lý đặc biệt cho select box nếu bạn vẫn muốn dùng
    if (name === "isActiveSelect") {
      setFormData((prev) => ({ ...prev, isActive: value === "true" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: newValue }));
    }
  };

  const handleSave = () => {
    onSave(formData);
  };

  if (!isOpen) return null;

  const isEditMode = !!initialData;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>
            {isEditMode ? "Cập nhật Khách hàng" : "Thêm Khách hàng Mới"}
          </h3>
          <button onClick={onClose} style={styles.modalCloseButton}>
            <XIcon size={20} />
          </button>
        </div>
        <div style={styles.modalBody}>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Tên Khách hàng</label>
            <input
              type="text"
              // Sửa: name và value
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.formInput}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Trạng thái</label>
            {/* Sửa: Dùng select box để điều khiển giá trị boolean */}
            <select
              name="isActive" // Đặt tên là isActive để khớp với state
              value={formData.isActive} // value là true hoặc false
              onChange={(e) => {
                // Chuyển đổi giá trị chuỗi "true"/"false" thành boolean
                const newIsActive = e.target.value === "true";
                setFormData((prev) => ({ ...prev, isActive: newIsActive }));
              }}
              style={styles.formSelect}
            >
              <option value={true}>Hoạt động</option>
              <option value={false}>Không hoạt động</option>
            </select>
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

export default CustomerFormModal;
