// src/components/TrafficSourceChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// --- DỮ LIỆU MẪU ĐÃ CẬP NHẬT (THEO YÊU CẦU CỦA BẠN) ---
// 1. Số liệu giảm ~ một nửa
// 2. Zalo (luôn <) Facebook
const chartData = [
  { date: "Sep 18", facebook: 1, zalo: 0, direct: 1 }, // 2
  { date: "Sep 25", facebook: 20, zalo: 15, direct: 5 }, // 40
  { date: "Oct 02", facebook: 45, zalo: 30, direct: 15 }, // 90
  { date: "Oct 09", facebook: 60, zalo: 40, direct: 20 }, // 120
  { date: "Oct 16", facebook: 50, zalo: 35, direct: 15 }, // 100
  { date: "Oct 23", facebook: 35, zalo: 25, direct: 10 }, // 70
  { date: "Nov 03", facebook: 25, zalo: 20, direct: 5 }, // 50
];
// ----------------------------------------------------

// Màu sắc giữ nguyên
const COLORS = {
  facebook: "#3b5998",
  zalo: "#0068ff",
  direct: "#ffc658",
};

const TrafficSourceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Cấu trúc các đường <Line> giữ nguyên */}
        <Line
          type="monotone"
          dataKey="facebook"
          stroke={COLORS.facebook}
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />

        <Line
          type="monotone"
          dataKey="zalo"
          stroke={COLORS.zalo}
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />

        <Line
          type="monotone"
          dataKey="direct"
          stroke={COLORS.direct}
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrafficSourceChart;
