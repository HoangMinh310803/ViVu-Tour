import React, { useState } from "react";
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
import { Search, ChevronDown, MoreVertical } from "lucide-react";

const EventAnalyticsDashboard = () => {
  const [timeFilter, setTimeFilter] = useState("Day");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Dữ liệu cho biểu đồ
  // Dữ liệu cho biểu đồ từ 01/09 đến 03/11 (phân bố đều, có dao động, dùng key "total")
  const chartData = [
    {
      date: "01/09",
      total: 42,
      page_view: 13,
      scroll: 9,
      user_engagement: 8,
      session_start: 8,
      first_visit: 4,
    },
    {
      date: "05/09",
      total: 55,
      page_view: 17,
      scroll: 12,
      user_engagement: 10,
      session_start: 10,
      first_visit: 6,
    },
    {
      date: "09/09",
      total: 68,
      page_view: 22,
      scroll: 15,
      user_engagement: 12,
      session_start: 13,
      first_visit: 6,
    },
    {
      date: "13/09",
      total: 82,
      page_view: 26,
      scroll: 17,
      user_engagement: 15,
      session_start: 17,
      first_visit: 7,
    },
    {
      date: "17/09",
      total: 95,
      page_view: 30,
      scroll: 20,
      user_engagement: 17,
      session_start: 20,
      first_visit: 8,
    },
    {
      date: "21/09",
      total: 110,
      page_view: 35,
      scroll: 23,
      user_engagement: 19,
      session_start: 22,
      first_visit: 11,
    },
    {
      date: "25/09",
      total: 123,
      page_view: 38,
      scroll: 26,
      user_engagement: 22,
      session_start: 25,
      first_visit: 12,
    },
    {
      date: "29/09",
      total: 118,
      page_view: 38,
      scroll: 25,
      user_engagement: 21,
      session_start: 23,
      first_visit: 11,
    },
    {
      date: "03/10",
      total: 104,
      page_view: 33,
      scroll: 21,
      user_engagement: 19,
      session_start: 20,
      first_visit: 11,
    },
    {
      date: "07/10",
      total: 96,
      page_view: 31,
      scroll: 19,
      user_engagement: 18,
      session_start: 19,
      first_visit: 9,
    },
    {
      date: "11/10",
      total: 90,
      page_view: 30,
      scroll: 18,
      user_engagement: 17,
      session_start: 17,
      first_visit: 8,
    },
    {
      date: "15/10",
      total: 84,
      page_view: 27,
      scroll: 17,
      user_engagement: 16,
      session_start: 16,
      first_visit: 8,
    },
    {
      date: "19/10",
      total: 78,
      page_view: 25,
      scroll: 15,
      user_engagement: 15,
      session_start: 14,
      first_visit: 9,
    },
    {
      date: "23/10",
      total: 72,
      page_view: 23,
      scroll: 14,
      user_engagement: 13,
      session_start: 13,
      first_visit: 9,
    },
    {
      date: "27/10",
      total: 60,
      page_view: 20,
      scroll: 11,
      user_engagement: 11,
      session_start: 11,
      first_visit: 7,
    },
    {
      date: "31/10",
      total: 49,
      page_view: 16,
      scroll: 9,
      user_engagement: 9,
      session_start: 9,
      first_visit: 6,
    },
    {
      date: "03/11",
      total: 46,
      page_view: 16,
      scroll: 8,
      user_engagement: 8,
      session_start: 8,
      first_visit: 6,
    },
  ];

  // Dữ liệu cho bảng
  // Dữ liệu cho bảng (đồng bộ với chartData)
  const tableData = [
    {
      id: 1,
      name: "page_view",
      events: 479,
      percentage: 32.5,
      users: 88,
      userPercentage: 95.6,
      eventsPerUser: 479 / 88, // 5.44
      revenue: 0.0,
    },
    {
      id: 2,
      name: "scroll",
      events: 329,
      percentage: 22.3,
      users: 74,
      userPercentage: 80.4,
      eventsPerUser: 329 / 74, // 4.45
      revenue: 0.0,
    },
    {
      id: 3,
      name: "user_engagement",
      events: 308,
      percentage: 20.9,
      users: 71,
      userPercentage: 77.1,
      eventsPerUser: 308 / 71, // 4.34
      revenue: 0.0,
    },
    {
      id: 4,
      name: "session_start",
      events: 267,
      percentage: 18.1,
      users: 65,
      userPercentage: 70.6,
      eventsPerUser: 267 / 65, // 4.11
      revenue: 0.0,
    },
    {
      id: 5,
      name: "first_visit",
      events: 89,
      percentage: 6.0,
      users: 39,
      userPercentage: 42.3,
      eventsPerUser: 89 / 39, // 2.28
      revenue: 0.0,
    },
  ];

  const total = {
    events: 1472,
    users: 10,
    avgEventsPerUser: 147.2,
    revenue: 0.0,
  };

  const totalEvents = 1472;
  const totalUsers = 92;
  const avgEventsPerUser = 12.0;

  return (
    <div className="w-full bg-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm text-gray-700">
          Number of events by Event Name over time
        </h2>
      </div>

      {/* Chart */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "12px" }} iconType="circle" />
            <Line
              type="monotone"
              dataKey="Tổng_cộng"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="page_view"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="scroll"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="user_engagement"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="session_start"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="first_visit"
              stroke="#ec4899"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-500 border border-gray-300 rounded px-3 py-1">
            Constructing a row graph
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Event name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                <div className="flex items-center gap-1">
                  Number of events
                  <span className="text-xs">↓</span>
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Total number of users
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Number of events per active user
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Total revenue
              </th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* Total Row */}
            <tr className="border-t border-gray-200 bg-gray-50 font-medium">
              <td className="px-4 py-3">
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </td>
              <td className="px-4 py-3 text-sm">Total</td>
              <td className="px-4 py-3">
                <div className="text-sm">{totalEvents}</div>
                <div className="text-xs text-gray-500">100% of the total</div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm">{totalUsers}</div>
                <div className="text-xs text-gray-500">100% of the total</div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm">{avgEventsPerUser.toFixed(2)}</div>
                <div className="text-xs text-gray-500">Average 0%</div>
              </td>
              <td className="px-4 py-3 text-sm">$0.00</td>
              <td className="px-4 py-3"></td>
            </tr>

            {/* Data Rows */}
            {tableData.map((row) => (
              <tr
                key={row.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{row.id}</span>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {row.name}
                    </a>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  {row.events} ({row.percentage}%)
                </td>
                <td className="px-4 py-3 text-sm">
                  {row.users} ({row.userPercentage}%)
                </td>
                <td className="px-4 py-3 text-sm">
                  {row.eventsPerUser.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm">
                  {row.revenue.toFixed(2)} $ (−)
                </td>
                <td className="px-4 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventAnalyticsDashboard;
