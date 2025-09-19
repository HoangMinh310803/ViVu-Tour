// src/components/common/BookingDetailModal.js

import React from "react";
import { X as XIcon } from "lucide-react";
import { styles } from "../../styles";
import { getStatusStyle, getStatusText } from "../../utils";

const DetailRow = ({ label, value, isStatus = false }) => (
  <div style={{ marginBottom: "12px", display: "flex" }}>
    <strong style={{ width: "150px", color: "#4b5563" }}>{label}:</strong>
    {isStatus ? value : <span style={{ color: "#1f2937" }}>{value}</span>}
  </div>
);

// Sửa: Thêm prop `isOpen` để quản lý việc hiển thị
const BookingDetailModal = ({ isOpen, booking, onClose }) => {
  if (!isOpen || !booking) {
    return null;
  }

  // Tạo mã booking từ bookingId
  const bookingCode = `BK${String(booking.bookingId).padStart(4, "0")}`;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>Chi tiết Đặt Tour - #{bookingCode}</h3>
          <button onClick={onClose} style={styles.modalCloseButton}>
            <XIcon size={20} />
          </button>
        </div>
        <div style={styles.modalBody}>
          <h4 style={styles.subheading}>Thông tin Khách hàng</h4>
          {/* Sửa: Truy cập nested data booking.user */}
          <DetailRow label="Tên khách hàng" value={booking.user?.fullName} />
          <DetailRow label="Email" value={booking.user?.email} />
          <DetailRow label="Số điện thoại" value={booking.user?.phone} />

          <h4 style={{ ...styles.subheading, marginTop: "24px" }}>
            Thông tin Tour
          </h4>
          {/* Sửa: Truy cập nested data booking.tour */}
          <DetailRow label="Tên Tour" value={booking.tour?.tourName} />
          <DetailRow
            label="Ngày khởi hành"
            value={new Date(booking.tour?.startDate).toLocaleDateString(
              "vi-VN"
            )}
          />
          {/* Sửa: Dùng đúng key `numberOfPeople` */}
          <DetailRow label="Số khách" value={booking.numberOfPeople} />
          <DetailRow
            label="Ngày đặt tour"
            value={new Date(booking.bookingDate).toLocaleDateString("vi-VN")}
          />
          <DetailRow label="Ghi chú" value={booking.notes || "Không có"} />

          <h4 style={{ ...styles.subheading, marginTop: "24px" }}>
            Thông tin Thanh toán
          </h4>
          {/* Sửa: Dùng đúng key `totalAmount` và định dạng tiền tệ */}
          <DetailRow
            label="Tổng tiền"
            value={`${new Intl.NumberFormat("vi-VN").format(
              booking.totalAmount
            )}đ`}
          />
          {/* Sửa: Dùng đúng key `paymentStatus` */}
          <DetailRow label="Trạng thái TT" value={booking.paymentStatus} />
          <DetailRow
            label="Trạng thái Booking"
            isStatus={true}
            value={
              <span style={getStatusStyle(booking.status, styles)}>
                {getStatusText(booking.status)}
              </span>
            }
          />
        </div>
        <div style={styles.modalFooter}>
          <button onClick={onClose} style={styles.secondaryButton}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailModal;
