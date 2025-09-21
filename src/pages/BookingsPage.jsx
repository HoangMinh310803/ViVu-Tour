// src/pages/BookingsPage.js

import React, { useState, useEffect } from "react";
import apiClient from "../apiConfig";
import PaginatedTable from "../components/common/PaginatedTable";
import BookingDetailModal from "../components/common/BookingDetailModal";
import { Eye, Check, X } from "lucide-react";
import { styles } from "../styles";
import { getStatusStyle, getStatusText } from "../utils";

const BookingsPage = ({ resetToken }) => {
  const [bookingsList, setBookingsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // --- API Handlers ---
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/recent-bookings/20");
      setBookingsList(response.data);
      setError(null);
    } catch (err) {
      setError("Không thể tải danh sách đặt tour.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleApprove = async (bookingId) => {
    try {
      await apiClient.put(`/api/Booking/Edit/${bookingId}`, {
        status: "Confirmed",
      });
      await fetchBookings();
    } catch (err) {
      alert("Phê duyệt thất bại!");
      console.error(err);
    }
  };

  const handleCancel = async (bookingId) => {
    try {
      await apiClient.put(`/api/Booking/Edit/${bookingId}`, {
        status: "Cancelled",
      });
      await fetchBookings();
    } catch (err) {
      alert("Từ chối thất bại!");
      console.error(err);
    }
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  // --- Table Definitions ---
  const columns = [
    {
      header: "Khách hàng",
      width: "20%",
      render: (item) => (item.user ? item.user.fullName : "N/A"),
    },
    {
      header: "Tour",
      width: "30%",
      render: (item) => (item.tour ? item.tour.tourName : "N/A"),
    },
    {
      header: "Ngày đặt",
      width: "15%",
      render: (item) => new Date(item.bookingDate).toLocaleDateString("vi-VN"),
    },
    {
      key: "status",
      header: "Trạng thái",
      width: "15%",
      render: (item) => (
        <span style={getStatusStyle(item.status, styles)}>
          {getStatusText(item.status)}
        </span>
      ),
    },
    {
      key: "totalAmount",
      header: "Số tiền",
      width: "10%",
      render: (item) =>
        new Intl.NumberFormat("vi-VN").format(item.totalAmount) + "đ",
    },
  ];

  const renderActions = (item) => (
    <>
      <button
        title="Xem chi tiết"
        onClick={() => handleViewDetails(item)}
        style={{ ...styles.actionBtn, color: "#14B8A6" }}
      >
        <Eye size={16} />
      </button>

      {item.status === "Pending" && (
        <>
          <button
            title="Phê duyệt"
            onClick={() => {
              // Yêu cầu xác nhận trước khi thực hiện
              if (
                window.confirm(
                  "Bạn có chắc chắn muốn PHÊ DUYỆT đơn đặt tour này không?"
                )
              ) {
                handleApprove(item.bookingId);
              }
            }}
            style={{ ...styles.actionBtn, color: "#10b981" }}
          >
            <Check size={16} />
          </button>
          <button
            title="Từ chối"
            onClick={() => {
              // Yêu cầu xác nhận trước khi thực hiện
              if (
                window.confirm(
                  "Bạn có chắc chắn muốn TỪ CHỐI đơn đặt tour này không?"
                )
              ) {
                handleCancel(item.bookingId);
              }
            }}
            style={{ ...styles.actionBtn, color: "#ef4444" }}
          >
            <X size={16} />
          </button>
        </>
      )}
    </>
  );

  // --- Render Logic ---
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Đang tải danh sách đặt tour...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
        {error}
      </div>
    );
  }

  return (
    <>
      <PaginatedTable
        title="Danh sách Đặt Tour"
        columns={columns}
        data={bookingsList}
        renderRowActions={renderActions}
        resetToken={resetToken}
      />

      <BookingDetailModal
        isOpen={isModalOpen}
        booking={selectedBooking}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default BookingsPage;
