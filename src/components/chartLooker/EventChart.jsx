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
      date: "Sep 18",
      total: 7,
      page_view: 2,
      scroll: 1,
      user_engagement: 1,
      session_start: 2,
      first_visit: 1,
    },
    {
      date: "Sep 25",
      total: 89,
      page_view: 32,
      scroll: 14,
      user_engagement: 11,
      session_start: 19,
      first_visit: 13,
    },
    {
      date: "Oct 02",
      total: 171,
      page_view: 60,
      scroll: 31,
      user_engagement: 24,
      session_start: 32,
      first_visit: 24,
    },
    {
      date: "Oct 09",
      total: 257,
      page_view: 86,
      scroll: 48,
      user_engagement: 39,
      session_start: 45,
      first_visit: 39,
    },
    {
      date: "Oct 16",
      total: 325,
      page_view: 106,
      scroll: 63,
      user_engagement: 52,
      session_start: 57,
      first_visit: 47,
    },
    {
      date: "Oct 23",
      total: 268,
      page_view: 88,
      scroll: 52,
      user_engagement: 44,
      session_start: 47,
      first_visit: 37,
    },
    {
      date: "Oct 30",
      total: 207,
      page_view: 68,
      scroll: 39,
      user_engagement: 34,
      session_start: 36,
      first_visit: 30,
    },
    {
      date: "Nov 03",
      total: 148,
      page_view: 50,
      scroll: 28,
      user_engagement: 24,
      session_start: 26,
      first_visit: 20,
    },
  ];

  // Dữ liệu cho bảng
  // Dữ liệu cho bảng (đồng bộ với chartData)
  const tableData = [
    {
      id: 1,
      name: "page_view",
      events: 492,
      percentage: 33.4,
      users: 88,
      userPercentage: 95.7,
      eventsPerUser: 492 / 88, // 5.59
      revenue: 0.0,
    },
    {
      id: 2,
      name: "scroll",
      events: 276,
      percentage: 18.7,
      users: 78,
      userPercentage: 84.8,
      eventsPerUser: 276 / 78, // 3.54
      revenue: 0.0,
    },
    {
      id: 3,
      name: "user_engagement",
      events: 229,
      percentage: 15.6,
      users: 72,
      userPercentage: 78.3,
      eventsPerUser: 229 / 72, // 3.18
      revenue: 0.0,
    },
    {
      id: 4,
      name: "session_start",
      events: 264,
      percentage: 17.9,
      users: 70,
      userPercentage: 76.1,
      eventsPerUser: 264 / 70, // 3.77
      revenue: 0.0,
    },
    {
      id: 5,
      name: "first_visit",
      events: 211,
      percentage: 14.4,
      users: 65,
      userPercentage: 70.7,
      eventsPerUser: 211 / 65, // 3.25
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
