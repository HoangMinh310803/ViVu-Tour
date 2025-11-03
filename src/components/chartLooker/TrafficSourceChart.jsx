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
  { date: "Sep 01", facebook: 20, zalo: 12, direct: 5 },
  { date: "Sep 08", facebook: 15, zalo: 7, direct: 6 },
  { date: "Sep 15", facebook: 10, zalo: 8, direct: 4 }, // Đã sửa (zalo 8 < fb 10)
  { date: "Sep 22", facebook: 14, zalo: 12, direct: 2 }, // Đã sửa (zalo 12 < fb 14)
  { date: "Sep 29", facebook: 9, zalo: 7, direct: 7 }, // Đã sửa (zalo 7 < fb 9)
  { date: "Oct 06", facebook: 12, zalo: 10, direct: 5 }, // Đã sửa (zalo 10 < fb 12)
  { date: "Oct 13", facebook: 17, zalo: 15, direct: 1 }, // Đã sửa (zalo 15 < fb 17)
  { date: "Oct 20", facebook: 23, zalo: 15, direct: 3 },
  { date: "Oct 27", facebook: 25, zalo: 18, direct: 8 },
  { date: "Nov 03", facebook: 28, zalo: 20, direct: 4 },
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
