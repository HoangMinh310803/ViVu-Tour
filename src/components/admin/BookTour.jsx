import React, { useState } from "react";
import {
  Plus,
  Search,
  Eye,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  Users,
  Phone,
  Mail,
} from "lucide-react";

const BookTour = () => {
  const [activeTab, setActiveTab] = useState("bookings"); // 'bookings', 'new-booking'
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Dữ liệu đặt tour
  const bookings = [
    {
      id: 1,
      customer: "Nguyễn Văn A",
      phone: "0901234567",
      email: "nguyenvana@gmail.com",
      tour: "Heritage Bình Chuẩn Cát Bà",
      date: "2025-01-20",
      guests: 4,
      status: "confirmed",
      amount: "16,600,000đ",
      bookingDate: "2025-01-15",
    },
    {
      id: 2,
      customer: "Trần Thị B",
      phone: "0912345678",
      email: "tranthib@gmail.com",
      tour: "Ambassador Hạ Long",
      date: "2025-01-22",
      guests: 2,
      status: "pending",
      amount: "7,700,000đ",
      bookingDate: "2025-01-16",
    },
    {
      id: 3,
      customer: "Lê Văn C",
      phone: "0923456789",
      email: "levanc@gmail.com",
      tour: "Grand Pioneers",
      date: "2025-01-25",
      guests: 6,
      status: "confirmed",
      amount: "30,900,000đ",
      bookingDate: "2025-01-17",
    },
    {
      id: 4,
      customer: "Phạm Thị D",
      phone: "0934567890",
      email: "phamthid@gmail.com",
      tour: "Capella Cruise",
      date: "2025-01-28",
      guests: 3,
      status: "cancelled",
      amount: "8,850,000đ",
      bookingDate: "2025-01-18",
    },
  ];

  // Danh sách tour có sẵn
  const availableTours = [
    { id: 1, name: "Heritage Bình Chuẩn Cát Bà", price: "4,150,000" },
    { id: 2, name: "Ambassador Hạ Long", price: "3,850,000" },
    { id: 3, name: "Grand Pioneers", price: "5,150,000" },
    { id: 4, name: "Capella Cruise", price: "2,950,000" },
  ];

  const [formData, setFormData] = useState({
    customer: "",
    phone: "",
    email: "",
    tour: "",
    date: "",
    guests: 1,
    notes: "",
  });

  // Styles từ dashboard gốc
  const styles = {
    // Header styles
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "24px",
    },
    headerTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#1f2937",
      margin: 0,
    },
    headerActions: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    searchContainer: {
      position: "relative",
    },
    searchInput: {
      paddingLeft: "40px",
      paddingRight: "16px",
      paddingTop: "8px",
      paddingBottom: "8px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      outline: "none",
      width: "300px",
      fontSize: "14px",
    },
    searchIcon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af",
    },
    primaryBtn: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 16px",
      backgroundColor: "#14B8A6",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },

    // Table styles (từ dashboard gốc)
    table: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e5e7eb",
      overflow: "hidden",
    },
    tableHeader: {
      padding: "24px",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    tableTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
      margin: 0,
    },
    tableActions: {
      color: "#14B8A6",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
    },
    tableContent: {
      overflowX: "auto",
    },
    tableEl: {
      width: "100%",
      borderCollapse: "collapse",
    },
    tableHead: {
      backgroundColor: "#f9fafb",
    },
    tableHeadCell: {
      padding: "12px 24px",
      textAlign: "left",
      fontSize: "12px",
      fontWeight: "500",
      color: "#6b7280",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    tableRow: {
      borderBottom: "1px solid #e5e7eb",
      transition: "background-color 0.2s",
    },
    tableCell: {
      padding: "16px 24px",
      fontSize: "14px",
    },
    actionButtons: {
      display: "flex",
      gap: "8px",
    },
    actionBtn: {
      padding: "4px",
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      borderRadius: "4px",
      transition: "background-color 0.2s",
    },

    // Modal styles
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "500px",
      margin: "20px",
    },
    modalHeader: {
      padding: "24px 24px 0 24px",
    },
    modalTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#1f2937",
      margin: "0 0 16px 0",
    },
    modalBody: {
      padding: "0 24px 24px 24px",
    },
    formGroup: {
      marginBottom: "16px",
    },
    formLabel: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "6px",
    },
    formInput: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.2s",
    },
    formSelect: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      fontSize: "14px",
      outline: "none",
      backgroundColor: "white",
      cursor: "pointer",
    },
    formTextarea: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      fontSize: "14px",
      outline: "none",
      minHeight: "80px",
      resize: "vertical",
    },
    formActions: {
      display: "flex",
      gap: "12px",
      justifyContent: "flex-end",
      marginTop: "20px",
      paddingTop: "20px",
      borderTop: "1px solid #e5e7eb",
    },
    cancelBtn: {
      padding: "8px 16px",
      border: "1px solid #d1d5db",
      backgroundColor: "white",
      color: "#6b7280",
      borderRadius: "6px",
      fontSize: "14px",
      cursor: "pointer",
    },
  };

  // Status functions từ dashboard gốc
  const getStatusStyle = (status) => {
    const baseStyle = {
      display: "inline-flex",
      padding: "2px 8px",
      fontSize: "12px",
      fontWeight: "600",
      borderRadius: "12px",
    };
    switch (status) {
      case "confirmed":
        return { ...baseStyle, backgroundColor: "#dcfce7", color: "#166534" };
      case "pending":
        return { ...baseStyle, backgroundColor: "#fef3c7", color: "#92400e" };
      case "cancelled":
        return { ...baseStyle, backgroundColor: "#fee2e2", color: "#991b1b" };
      default:
        return baseStyle;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Đã xác nhận";
      case "pending":
        return "Chờ xử lý";
      case "cancelled":
        return "Đã hủy";
      default:
        return status;
    }
  };

  // Filter bookings based on search
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.tour.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowModal(false);
    setFormData({
      customer: "",
      phone: "",
      email: "",
      tour: "",
      date: "",
      guests: 1,
      notes: "",
    });
  };

  const handleEdit = (booking) => {
    setFormData({
      customer: booking.customer,
      phone: booking.phone,
      email: booking.email,
      tour: booking.tour,
      date: booking.date,
      guests: booking.guests,
      notes: "",
    });
    setShowModal(true);
  };

  return (
    <div>
      {/* Header */}
      <div style={styles.headerContainer}>
        <h1 style={styles.headerTitle}>Quản lý đặt tour</h1>
        <div style={styles.headerActions}>
          <div style={styles.searchContainer}>
            <Search size={20} style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Tìm kiếm đặt tour..."
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            style={styles.primaryBtn}
            onClick={() => setShowModal(true)}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0f766e")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#14B8A6")}
          >
            <Plus size={16} />
            Đặt tour mới
          </button>
        </div>
      </div>

      {/* Bookings Table */}
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Danh sách đặt tour</h3>
          <span style={styles.tableActions}>
            Tổng cộng: {filteredBookings.length} đơn
          </span>
        </div>
        <div style={styles.tableContent}>
          <table style={styles.tableEl}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={styles.tableHeadCell}>Khách hàng</th>
                <th style={styles.tableHeadCell}>Tour</th>
                <th style={styles.tableHeadCell}>Ngày khởi hành</th>
                <th style={styles.tableHeadCell}>Số khách</th>
                <th style={styles.tableHeadCell}>Trạng thái</th>
                <th style={styles.tableHeadCell}>Số tiền</th>
                <th style={styles.tableHeadCell}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  style={styles.tableRow}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f9fafb")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  <td
                    style={{
                      ...styles.tableCell,
                      fontWeight: "500",
                      color: "#1f2937",
                    }}
                  >
                    <div>
                      <div>{booking.customer}</div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>
                        {booking.phone}
                      </div>
                    </div>
                  </td>
                  <td style={{ ...styles.tableCell, color: "#6b7280" }}>
                    {booking.tour}
                  </td>
                  <td style={{ ...styles.tableCell, color: "#6b7280" }}>
                    {booking.date}
                  </td>
                  <td style={{ ...styles.tableCell, textAlign: "center" }}>
                    {booking.guests}
                  </td>
                  <td style={styles.tableCell}>
                    <span style={getStatusStyle(booking.status)}>
                      {getStatusText(booking.status)}
                    </span>
                  </td>
                  <td
                    style={{
                      ...styles.tableCell,
                      fontWeight: "500",
                      color: "#1f2937",
                    }}
                  >
                    {booking.amount}
                  </td>
                  <td style={styles.tableCell}>
                    <div style={styles.actionButtons}>
                      <button
                        style={{ ...styles.actionBtn, color: "#14B8A6" }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#f0fdfa")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                        title="Xem chi tiết"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        style={{ ...styles.actionBtn, color: "#3b82f6" }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#eff6ff")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                        onClick={() => handleEdit(booking)}
                        title="Chỉnh sửa"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        style={{ ...styles.actionBtn, color: "#ef4444" }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#fef2f2")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                        title="Xóa"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for new/edit booking */}
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>
                {formData.customer ? "Chỉnh sửa đặt tour" : "Đặt tour mới"}
              </h2>
            </div>
            <div style={styles.modalBody}>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Tên khách hàng *</label>
                  <input
                    type="text"
                    style={styles.formInput}
                    value={formData.customer}
                    onChange={(e) =>
                      setFormData({ ...formData, customer: e.target.value })
                    }
                    required
                    placeholder="Nhập tên khách hàng"
                  />
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ ...styles.formGroup, flex: 1 }}>
                    <label style={styles.formLabel}>Số điện thoại *</label>
                    <input
                      type="tel"
                      style={styles.formInput}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div style={{ ...styles.formGroup, flex: 1 }}>
                    <label style={styles.formLabel}>Email</label>
                    <input
                      type="email"
                      style={styles.formInput}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Chọn tour *</label>
                  <select
                    style={styles.formSelect}
                    value={formData.tour}
                    onChange={(e) =>
                      setFormData({ ...formData, tour: e.target.value })
                    }
                    required
                  >
                    <option value="">-- Chọn tour --</option>
                    {availableTours.map((tour) => (
                      <option key={tour.id} value={tour.name}>
                        {tour.name} - {tour.price}đ
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ ...styles.formGroup, flex: 1 }}>
                    <label style={styles.formLabel}>Ngày khởi hành *</label>
                    <input
                      type="date"
                      style={styles.formInput}
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div style={{ ...styles.formGroup, flex: 1 }}>
                    <label style={styles.formLabel}>Số khách *</label>
                    <select
                      style={styles.formSelect}
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          guests: parseInt(e.target.value),
                        })
                      }
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} khách
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Ghi chú</label>
                  <textarea
                    style={styles.formTextarea}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Yêu cầu đặc biệt hoặc ghi chú..."
                  />
                </div>

                <div style={styles.formActions}>
                  <button
                    type="button"
                    style={styles.cancelBtn}
                    onClick={() => {
                      setShowModal(false);
                      setFormData({
                        customer: "",
                        phone: "",
                        email: "",
                        tour: "",
                        date: "",
                        guests: 1,
                        notes: "",
                      });
                    }}
                  >
                    Hủy
                  </button>
                  <button type="submit" style={styles.primaryBtn}>
                    {formData.customer ? "Cập nhật" : "Tạo đặt tour"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTour;
