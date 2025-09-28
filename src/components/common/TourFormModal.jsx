import React, { useState, useEffect } from "react";
import { X as XIcon, Plus, Trash2 } from "lucide-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { styles } from "../../styles";
const initialFormState = {
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
  tourConditions: [],
  tourImages: [],
};
const defaultAddState = {
    ...initialFormState, // Sử dụng state ban đầu đã định nghĩa
    tourConditions: [
        { title: "Lịch trình tour", content: "" },
        { title: "Hướng dẫn chuẩn bị", content: "" },
        { title: "Lưu ý quan trọng", content: "" },
    ],
    tourImages: [{ imageUrl: "", caption: "" }],
};
const TourFormModal = ({ isOpen, onClose, onSave, initialData }) => {
  // Khởi tạo state với đầy đủ các trường theo API mới
  const [formData, setFormData] = useState(initialFormState);

  // Cấu hình CKEditor
  const editorConfig = {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "blockQuote",
      "insertTable",
      "|",
      "undo",
      "redo",
    ],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
  };

  useEffect(() => {
        if (isOpen) {
            if (initialData) {
                // CHẾ ĐỘ EDIT: Nạp dữ liệu từ initialData
                setFormData({
                    ...initialData,
                    startDate: initialData.startDate ? initialData.startDate.split("T")[0] : "",
                    endDate: initialData.endDate ? initialData.endDate.split("T")[0] : "",
                    tourConditions: initialData.tourConditions?.length
                        ? initialData.tourConditions
                        : [{ title: "", content: "" }],
                    tourImages: initialData.tourImages?.length
                        ? initialData.tourImages
                        : [{ imageUrl: "", caption: "" }],
                });
            } else {
                // CHẾ ĐỘ ADD: Sử dụng state mặc định cho việc thêm mới
                setFormData(defaultAddState);
            }
        } else {
            // KHI ĐÓNG MODAL: Reset state về trạng thái ban đầu
            // Đây là bước quan trọng nhất để sửa lỗi
            setFormData(initialFormState);
        }
    }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value, 10) || 0 : value,
    }));
  };

  // Xử lý thay đổi description với CKEditor
  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prev) => ({
      ...prev,
      description: data,
    }));
  };

  // Xử lý thay đổi điều kiện tour
  const handleConditionChange = (index, field, value) => {
    const updatedConditions = [...formData.tourConditions];
    updatedConditions[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      tourConditions: updatedConditions,
    }));
  };

  // Xử lý thay đổi content điều kiện với CKEditor
  const handleConditionContentChange = (index, event, editor) => {
    const data = editor.getData();
    handleConditionChange(index, "content", data);
  };

  // Thêm điều kiện mới
  const addCondition = () => {
    setFormData((prev) => ({
      ...prev,
      tourConditions: [...prev.tourConditions, { title: "", content: "" }],
    }));
  };

  // Xóa điều kiện (chỉ cho phép xóa khi có hơn 3 điều kiện)
  const removeCondition = (index) => {
    if (formData.tourConditions.length > 3) {
      const updatedConditions = formData.tourConditions.filter(
        (_, i) => i !== index
      );
      setFormData((prev) => ({
        ...prev,
        tourConditions: updatedConditions,
      }));
    }
  };

  // Xử lý thay đổi hình ảnh tour
  const handleImageChange = (index, field, value) => {
    const updatedImages = [...formData.tourImages];
    updatedImages[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      tourImages: updatedImages,
    }));
  };

  // Thêm hình ảnh mới
  const addImage = () => {
    setFormData((prev) => ({
      ...prev,
      tourImages: [...prev.tourImages, { imageUrl: "", caption: "" }],
    }));
  };

  // Xóa hình ảnh
  const removeImage = (index) => {
    if (formData.tourImages.length > 1) {
      const updatedImages = formData.tourImages.filter((_, i) => i !== index);
      setFormData((prev) => ({
        ...prev,
        tourImages: updatedImages,
      }));
    }
  };

  const handleSave = () => {
    // Lọc bỏ các điều kiện và hình ảnh trống
    const filteredData = {
      ...formData,
      tourConditions: formData.tourConditions.filter(
        (condition) => condition.title.trim() && condition.content.trim()
      ),
      tourImages: formData.tourImages.filter((image) => image.imageUrl.trim()),
    };

    onSave(filteredData);
    console.log("Saving tour data:", filteredData);
  };

  if (!isOpen) return null;
  const isEditMode = !!initialData;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div
        style={{
          ...styles.modalContainer,
          maxWidth: "900px",
          maxHeight: "90vh",
          overflow: "auto",
        }}
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

        <div style={{ ...styles.modalBody, padding: "30px" }}>
          {/* Thông tin cơ bản */}
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                margin: "0 0 20px 0",
                color: "#2c3e50",
                fontSize: "18px",
                fontWeight: "600",
                borderBottom: "2px solid #3498db",
                paddingBottom: "10px",
              }}
            >
              Thông tin cơ bản
            </h4>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Tên Tour *</label>
              <input
                type="text"
                name="tourName"
                value={formData.tourName}
                onChange={handleChange}
                style={styles.formInput}
                placeholder="Nhập tên tour"
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Điểm đến *</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  style={styles.formInput}
                  placeholder="Nhập điểm đến"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Phương tiện</label>
                <input
                  type="text"
                  name="transport"
                  value={formData.transport}
                  onChange={handleChange}
                  style={styles.formInput}
                  placeholder="Máy bay, xe khách, tàu hỏa..."
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Mô tả *</label>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  minHeight: "200px",
                }}
              >
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfig}
                  data={formData.description}
                  onChange={handleDescriptionChange}
                  onReady={(editor) => {
                    // Có thể thêm các cấu hình bổ sung ở đây
                  }}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Hình ảnh đại diện</label>
              <input
                type="url"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                style={styles.formInput}
                placeholder="URL hình ảnh đại diện"
              />
            </div>
          </div>

          {/* Thông tin chi tiết */}
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                margin: "0 0 20px 0",
                color: "#2c3e50",
                fontSize: "18px",
                fontWeight: "600",
                borderBottom: "2px solid #e74c3c",
                paddingBottom: "10px",
              }}
            >
              Thông tin chi tiết
            </h4>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
                  min="1"
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
                  min="0"
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
                  min="1"
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
          </div>

          {/* Điều kiện tour */}
          <div style={{ marginBottom: "30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  color: "#2c3e50",
                  fontSize: "18px",
                  fontWeight: "600",
                  borderBottom: "2px solid #f39c12",
                  paddingBottom: "10px",
                }}
              >
                Điều kiện tour
              </h4>
              <button
                type="button"
                onClick={addCondition}
                style={{
                  ...styles.primaryButton,
                  padding: "8px 12px",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Plus size={16} />
                Thêm điều kiện
              </button>
            </div>

            {formData.tourConditions.map((condition, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "20px",
                  marginBottom: "15px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <span style={{ fontWeight: "600", color: "#2c3e50" }}>
                    Điều kiện {index + 1}
                  </span>
                  {formData.tourConditions.length > 3 && (
                    <button
                      type="button"
                      onClick={() => removeCondition(index)}
                      style={{
                        background: "#e74c3c",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "5px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Tiêu đề</label>
                  <input
                    type="text"
                    value={condition.title}
                    onChange={(e) =>
                      handleConditionChange(index, "title", e.target.value)
                    }
                    style={styles.formInput}
                    placeholder="Ví dụ: Điều kiện hủy tour"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Nội dung</label>
                  <div
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      minHeight: "150px",
                    }}
                  >
                    <CKEditor
                      editor={ClassicEditor}
                      config={editorConfig}
                      data={condition.content}
                      onChange={(event, editor) =>
                        handleConditionContentChange(index, event, editor)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hình ảnh tour */}
          <div style={{ marginBottom: "30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  color: "#2c3e50",
                  fontSize: "18px",
                  fontWeight: "600",
                  borderBottom: "2px solid #27ae60",
                  paddingBottom: "10px",
                }}
              >
                Hình ảnh tour
              </h4>
              <button
                type="button"
                onClick={addImage}
                style={{
                  ...styles.primaryButton,
                  padding: "8px 12px",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Plus size={16} />
                Thêm hình ảnh
              </button>
            </div>

            {formData.tourImages.map((image, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "20px",
                  marginBottom: "15px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <span style={{ fontWeight: "600", color: "#2c3e50" }}>
                    Hình ảnh {index + 1}
                  </span>
                  {formData.tourImages.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      style={{
                        background: "#e74c3c",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "5px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>URL hình ảnh</label>
                  <input
                    type="url"
                    value={image.imageUrl}
                    onChange={(e) =>
                      handleImageChange(index, "imageUrl", e.target.value)
                    }
                    style={styles.formInput}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Mô tả hình ảnh</label>
                  <input
                    type="text"
                    value={image.caption}
                    onChange={(e) =>
                      handleImageChange(index, "caption", e.target.value)
                    }
                    style={styles.formInput}
                    placeholder="Mô tả ngắn gọn về hình ảnh"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.modalFooter}>
          <button onClick={onClose} style={styles.secondaryButton}>
            Hủy
          </button>
          <button onClick={handleSave} style={styles.primaryButton}>
            {isEditMode ? "Cập nhật" : "Thêm tour"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourFormModal;
