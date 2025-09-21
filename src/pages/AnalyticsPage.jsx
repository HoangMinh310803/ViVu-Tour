// src/pages/AnalyticsPage.js

import React, { useState, useEffect } from "react";
import apiClient from "../apiConfig";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { DollarSign, Users, TrendingUp, TrendingDown } from "lucide-react";
import { revenueProfitData } from "../data";
import { styles } from "../styles";

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
            so với năm trước
          </span>
        </div>
      </div>
      <div style={styles.statCardIcon}>
        <Icon size={24} color="#14B8A6" />
      </div>
    </div>
  </div>
);

const AnalyticsPage = () => {
  const [topTours, setTopTours] = useState([]);
  const [loadingTopTours, setLoadingTopTours] = useState(true);
  const [errorTopTours, setErrorTopTours] = useState(null);

  useEffect(() => {
    const fetchTopTours = async () => {
      try {
        setLoadingTopTours(true);
        const response = await apiClient.get("/top-revenue-tours");
        setTopTours(response.data);
        setErrorTopTours(null);
      } catch (err) {
        setErrorTopTours("Không thể tải top tours.");
        console.error(err);
      } finally {
        setLoadingTopTours(false);
      }
    };

    fetchTopTours();
  }, []);

  const renderTopToursBody = () => {
    if (loadingTopTours) {
      return (
        <tr>
          <td colSpan="3" style={styles.tableCell}>
            Đang tải...
          </td>
        </tr>
      );
    }

    if (errorTopTours) {
      return (
        <tr>
          <td colSpan="3" style={{ ...styles.tableCell, color: "red" }}>
            {errorTopTours}
          </td>
        </tr>
      );
    }

    return topTours.map((tour) => (
      <tr key={tour.tourId}>
        <td style={{ ...styles.tableCell, fontWeight: "500" }}>
          {tour.tourName}
        </td>
        <td
          style={{ ...styles.tableCell, color: "#10b981", fontWeight: "500" }}
        >
          {new Intl.NumberFormat("vi-VN").format(tour.totalRevenue)}đ
        </td>
        {/* SỬA LẠI Ở ĐÂY */}
        <td style={styles.tableCell}>{tour.bookingsCount}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div style={styles.statsGrid}>
        <StatCard
          title="Tổng doanh thu (Năm)"
          value="860M đ"
          change="+25.5%"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Lợi nhuận"
          value="215M đ"
          change="+18.2%"
          icon={TrendingUp}
          trend="up"
        />
        <StatCard
          title="Khách hàng mới"
          value="1,250"
          change="+15.1%"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Tỷ lệ hủy tour"
          value="5.8%"
          change="-1.4%"
          icon={TrendingDown}
          trend="down"
        />
      </div>

      <div style={{ ...styles.chartCard, marginBottom: "24px" }}>
        <h3 style={styles.chartTitle}>
          Phân tích Doanh thu & Lợi nhuận (8 tháng)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={revenueProfitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Doanh thu"
              stroke="#14B8A6"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="profit"
              name="Lợi nhuận"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Top 5 Tours theo Doanh thu</h3>
        </div>
        <div style={styles.tableContent}>
          <table style={styles.tableEl}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={{ ...styles.tableHeadCell, width: "50%" }}>
                  Tên Tour
                </th>
                <th style={{ ...styles.tableHeadCell, width: "25%" }}>
                  Tổng doanh thu
                </th>
                <th style={{ ...styles.tableHeadCell, width: "25%" }}>
                  Số lượng đặt
                </th>
              </tr>
            </thead>
            <tbody>{renderTopToursBody()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AnalyticsPage;
