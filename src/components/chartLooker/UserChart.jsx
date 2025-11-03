import React, { useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

// Đăng ký các thành phần
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

// ----- Helper tạo màu Gradient -----
const createGradient = (ctx) => {
  const chart = ctx.chart;
  const { ctx: canvasCtx, chartArea } = chart;
  if (!chartArea) return null;
  const gradient = canvasCtx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0, "rgba(25, 118, 210, 0)");
  gradient.addColorStop(1, "rgba(25, 118, 210, 0.3)");
  return gradient;
};

// ----- TÙY CHỈNH TOOLTIP (Giữ nguyên) -----
const tooltipOptions = {
  enabled: true,
  backgroundColor: "rgba(255, 255, 255, 1)",
  titleColor: "#5f6368",
  bodyColor: "#1a1a1a",
  borderColor: "#e0e0e0",
  borderWidth: 1,
  padding: 10,
  displayColors: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  callbacks: {
    label: function (context) {
      return `Number: ${context.formattedValue}`;
    },
  },
};

// ----- ĐỊNH NGHĨA DỮ LIỆU VÀ TÙY CHỈNH CHO TỪNG TAB -----
const chartDataConfig = {
  // --- Cập nhật nhãn: bắt đầu từ ngày 15/09 ---
  labels: ["18/09", "28/09", "08/10", "18/10", "28/10", "03/11"],

  datasets: {
    // Tổng giữ nguyên: 58
    newUser: {
      data: [5, 9, 12, 14, 10, 8], // tổng = 58
      yMax: 20,
      stepSize: 5,
    },
    // Tổng giữ nguyên: 24
    oldUser: {
      data: [1, 3, 5, 4, 6, 5], // tổng = 24
      yMax: 8,
      stepSize: 2,
    },
    // Tổng giữ nguyên: 13
    potential: {
      data: [0, 2, 3, 2, 4, 2], // tổng = 13
      yMax: 4,
      stepSize: 1,
    },
  },
};

// -----------------------------------------------------------

const UserChart = () => {
  const [activeTab, setActiveTab] = useState("oldUser"); // Tab active mặc định

  // ----- TẠO DATA VÀ OPTIONS ĐỘNG -----
  // 'useMemo' giúp tối ưu, chỉ tạo lại biểu đồ khi 'activeTab' thay đổi
  const chartData = useMemo(() => {
    const dataSet = chartDataConfig.datasets[activeTab];
    return {
      labels: chartDataConfig.labels,
      datasets: [
        {
          fill: true,
          backgroundColor: (context) => createGradient(context),
          data: dataSet.data,
          borderColor: "rgb(25, 118, 210)",
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(25, 118, 210)",
        },
      ],
    };
  }, [activeTab]); // Chỉ chạy lại khi activeTab thay đổi

  const chartOptions = useMemo(() => {
    const dataSet = chartDataConfig.datasets[activeTab];
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: tooltipOptions,
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#5f6368" },
        },
        y: {
          min: 0,
          max: dataSet.yMax, // Trục Y động
          ticks: {
            stepSize: dataSet.stepSize, // Bước nhảy động
            color: "#5f6368",
          },
          grid: {
            color: "rgba(200, 200, 200, 0.3)",
            drawBorder: false,
          },
        },
      },
    };
  }, [activeTab]); // Chỉ chạy lại khi activeTab thay đổi
  // ------------------------------------------

  // Hàm helper gán class
  const getTabClasses = (tabName) => {
    const baseClasses =
      "flex flex-col items-center py-2 px-3 mr-4 cursor-pointer border-b-2 transition-all duration-200 ease-in-out rounded-t-md";
    if (activeTab === tabName) {
      return `${baseClasses} text-blue-600 border-blue-600`;
    }
    return `${baseClasses} text-gray-600 border-transparent hover:text-blue-500 hover:bg-gray-50`;
  };

  return (
    <div className="font-sans border border-gray-200 rounded-lg bg-white max-w-2xl mx-auto my-5 overflow-hidden shadow-sm">
      {/* PHẦN TAB SỐ LIỆU */}
      <div className="flex justify-start p-4 border-b border-gray-200">
        <div
          className={getTabClasses("newUser")}
          onClick={() => setActiveTab("newUser")} // Cập nhật state khi click
        >
          <span className="text-sm mb-1 whitespace-nowrap">
            New active users
          </span>
          <span className="text-2xl font-medium leading-tight">58</span>
        </div>

        <div
          className={getTabClasses("oldUser")}
          onClick={() => setActiveTab("oldUser")} // Cập nhật state khi click
        >
          <span className="text-sm mb-1 whitespace-nowrap">
            Returning users
          </span>
          <span className="text-2xl font-medium leading-tight">24</span>
        </div>

        <div
          className={getTabClasses("potential")}
          onClick={() => setActiveTab("potential")} // Cập nhật state khi click
        >
          <span className="text-sm mb-1 whitespace-nowrap">Qualified</span>
          <span className="text-2xl font-medium leading-tight">13</span>
        </div>
      </div>

      {/* PHẦN BIỂU ĐỒ */}
      <div className="h-64 p-4">
        {/* Component <Line> giờ sẽ tự động cập nhật
            khi 'chartData' hoặc 'chartOptions' thay đổi */}
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default UserChart;
