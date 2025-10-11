// src/pages/DashboardView.js

import React, { useState, useEffect } from "react";
import apiClient from "../apiConfig";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import { salesData, pieData } from "../data";
import { styles } from "../styles";
import { getStatusStyle, getStatusText } from "../utils";

// Cập nhật StatCard để xử lý trạng thái loading và không hiển thị 'change' nếu không có
const StatCard = ({ title, value, change, icon: Icon, trend, loading }) => (
  <div style={styles.statCard}>
    <div style={styles.statCardContent}>
      <div style={styles.statCardLeft}>
        <p style={styles.statCardTitle}>{title}</p>
        <p style={styles.statCardValue}>{loading ? "..." : value}</p>
        {/* Chỉ hiển thị dòng thay đổi khi không loading và có dữ liệu 'change' */}
        {!loading && change && (
          <div style={styles.statCardChange}>
            {trend === "up" ? (
              <TrendingUp size={16} color="#10b981" />
            ) : (
              <TrendingDown size={16} color="#ef4444" />
            )}
            <span
              style={{
                ...styles.statCardTrend,
                color: trend === "up" ? "#10b981" : "#ef4444",
              }}
            >
              {change}
            </span>
            <span
              style={{
                ...styles.statCardTrend,
                color: "#6b7280",
                marginLeft: "4px",
              }}
            >
              {" "}
              so với tháng trước
            </span>
          </div>
        )}
      </div>
      <div style={styles.statCardIcon}>
        <Icon size={24} color="#14B8A6" />
      </div>
    </div>
  </div>
);

const DashboardView = ({ setActiveTab }) => {
  const [recentBookings, setRecentBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [errorBookings, setErrorBookings] = useState(null);

  // MỚI: State cho số tour hoạt động
  const [activeToursCount, setActiveToursCount] = useState(0);
  const [loadingTours, setLoadingTours] = useState(true);

  // Hàm gọi API để lấy 5 booking gần nhất
  const fetchRecentBookings = async () => {
    try {
      setLoadingBookings(true);
      const response = await apiClient.get("/recent-bookings/5");
      setRecentBookings(response.data);
      setErrorBookings(null);
    } catch (err) {
      setErrorBookings("Không thể tải các đơn đặt tour gần đây.");
      console.error(err);
    } finally {
      setLoadingBookings(false);
    }
  };

  // MỚI: Hàm gọi API để lấy số tour đang hoạt động từ endpoint mới
  const fetchActiveToursCount = async () => {
    try {
      setLoadingTours(true);
      // Gọi API mới, không cần tham số
      const response = await apiClient.get("/active-tours-count");
      // API trả về trực tiếp một con số
      setActiveToursCount(response.data);
    } catch (err) {
      console.error("Lỗi khi tải số tour đang hoạt động:", err);
      setActiveToursCount(0); // Đặt giá trị mặc định là 0 nếu có lỗi
    } finally {
      setLoadingTours(false);
    }
  };

  // Gọi cả hai API khi component được render lần đầu
  useEffect(() => {
    fetchRecentBookings();
    fetchActiveToursCount(); // MỚI: Gọi hàm mới
  }, []);

  // ... hàm renderRecentBookings không thay đổi
  const renderRecentBookings = () => {
    if (loadingBookings)
      return (
        <tr>
          <td colSpan="5" style={styles.tableCell}>
            Đang tải...
          </td>
        </tr>
      );
    if (errorBookings)
      return (
        <tr>
          <td colSpan="5" style={{ ...styles.tableCell, color: "red" }}>
            {errorBookings}
          </td>
        </tr>
      );
    if (recentBookings.length === 0)
      return (
        <tr>
          <td colSpan="5" style={styles.tableCell}>
            Chưa có đơn đặt tour nào.
          </td>
        </tr>
      );

    return recentBookings.map((booking) => (
      <tr key={booking.bookingId}>
        <td
          style={{ ...styles.tableCell, fontWeight: "500", color: "#1f2937" }}
        >
          {booking.user?.fullName}
        </td>
        <td style={{ ...styles.tableCell, color: "#6b7280" }}>
          {booking.tour?.tourName}
        </td>
        <td style={{ ...styles.tableCell, color: "#6b7280" }}>
          {new Date(booking.tour?.startDate).toLocaleDateString("vi-VN")}
        </td>
        <td style={styles.tableCell}>
          <span style={getStatusStyle(booking.status, styles)}>
            {getStatusText(booking.status)}
          </span>
        </td>
        <td
          style={{ ...styles.tableCell, fontWeight: "500", color: "#1f2937" }}
        >
          {new Intl.NumberFormat("vi-VN").format(booking.totalAmount)}đ
        </td>
      </tr>
    ));
  };

  return (
    <React.Fragment>
      <div style={styles.statsGrid}>
        <StatCard
          title="Tổng doanh thu"
          value="2.5M đ"
          change="+12.5%"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Đơn đặt tour"
          value="2"
          change="+8.2%"
          icon={ShoppingCart}
          trend="up"
        />
        <StatCard
          title="Khách hàng"
          value="8"
          change="+5.1%"
          icon={Users}
          trend="up"
        />
        {/* MỚI: Cập nhật StatCard để dùng dữ liệu và trạng thái loading mới */}
        <StatCard
          title="Tour hoạt động"
          value={activeToursCount}
          icon={Package}
          loading={loadingTours}
          // Bỏ phần change và trend vì API mới không cung cấp
        />
      </div>

      {/* ...Phần còn lại của component không đổi... */}

      <div style={{ ...styles.chartsGrid, gridTemplateColumns: "2fr 1fr" }}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Doanh thu theo tháng</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#14B8A6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Phân loại tour</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Đặt tour gần đây</h3>
          <a
            href="#"
            style={styles.tableActions}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("bookings");
            }}
          >
            Xem tất cả
          </a>
        </div>
        <div style={styles.tableContent}>
          <table style={styles.tableEl}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={styles.tableHeadCell}>Khách hàng</th>
                <th style={styles.tableHeadCell}>Tour</th>
                <th style={styles.tableHeadCell}>Ngày khởi hành</th>
                <th style={styles.tableHeadCell}>Trạng thái</th>
                <th style={styles.tableHeadCell}>Số tiền</th>
              </tr>
            </thead>
            <tbody>{renderRecentBookings()}</tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DashboardView;
