// src/pages/DashboardView.js

// 1. Thêm import cho useState, useEffect và apiClient
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
  Eye,
} from "lucide-react";

// 2. Bỏ import `recentBookings` từ file data tĩnh
import { salesData, pieData } from "../data";
import { styles } from "../styles";
import { getStatusStyle, getStatusText } from "../utils";

const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <div style={styles.statCard}>
    <div style={styles.statCardContent}>
      <div style={styles.statCardLeft}>
        <p style={styles.statCardTitle}>{title}</p>
        <p style={styles.statCardValue}>{value}</p>
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
      </div>
      <div style={styles.statCardIcon}>
        <Icon size={24} color="#14B8A6" />
      </div>
    </div>
  </div>
);

const DashboardView = ({ setActiveTab }) => {
  // 3. Thêm state để quản lý danh sách booking, loading và lỗi
  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 4. Hàm gọi API để lấy 5 booking gần nhất
  const fetchRecentBookings = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/recent-bookings/5");
      setRecentBookings(response.data);
      setError(null);
    } catch (err) {
      setError("Không thể tải các đơn đặt tour gần đây.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 5. Gọi API khi component được render lần đầu
  useEffect(() => {
    fetchRecentBookings();
  }, []);

  // 6. Hàm render bảng booking với logic loading/error
  const renderRecentBookings = () => {
    if (loading)
      return (
        <tr>
          <td colSpan="5" style={styles.tableCell}>
            Đang tải...
          </td>
        </tr>
      );
    if (error)
      return (
        <tr>
          <td colSpan="5" style={{ ...styles.tableCell, color: "red" }}>
            {error}
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
      // 7. Sửa lại key và cách hiển thị dữ liệu cho đúng với API
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
          value="128.5M đ"
          change="+12.5%"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Đơn đặt tour"
          value="1,234"
          change="+8.2%"
          icon={ShoppingCart}
          trend="up"
        />
        <StatCard
          title="Khách hàng"
          value="856"
          change="+5.1%"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Tour hoạt động"
          value="42"
          change="-2.4%"
          icon={Package}
          trend="down"
        />
      </div>

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
            <tbody>
              {/* Gọi hàm render mới ở đây */}
              {renderRecentBookings()}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DashboardView;
