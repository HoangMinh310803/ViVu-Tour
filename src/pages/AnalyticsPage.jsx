import React from "react";
import UserChart from "../components/chartLooker/UserChart"; // Import biểu đồ CŨ của bạn
import TrafficSourceChart from "../components/chartLooker/TrafficSourceChart"; // Import biểu đồ MỚI
import EventChart from "../components/chartLooker/EventChart"; // Import biểu đồ SỰ KIỆN MỚI
import "../../src/index.css"; // Đảm bảo import file CSS của Tailwind
const Dashboard = () => {
  return (
    // Container chính với nền xám nhạt
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      {/* Tiêu đề trang (tùy chọn) */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Looker Studio
      </h1>

      {/* Sử dụng Grid Layout của Tailwind:
        - grid: Kích hoạt grid
        - grid-cols-1: Mặc định 1 cột (trên di động)
        - lg:grid-cols-2: 2 cột trên màn hình lớn (large) trở lên
        - gap-6: Khoảng cách giữa các mục
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Biểu đồ 1: UserChart (component bạn đã cung cấp) */}
        <div>
          <UserChart />
        </div>

        {/* Biểu đồ 2: TrafficSourceChart (component mới) */}
        <div>
          <TrafficSourceChart />
        </div>
        <div className="mt-5">
          <EventChart />
        </div>
        {/* Bạn có thể thêm nhiều biểu đồ hơn ở đây. 
          Chúng sẽ tự động sắp xếp vào lưới.
          <div className="lg:col-span-2">
             <AnotherChart /> (Biểu đồ này sẽ chiếm toàn bộ chiều rộng)
          </div> 
        */}
      </div>
    </div>
  );
};

export default Dashboard;
