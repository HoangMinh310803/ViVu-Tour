import React from "react";
import "./TourFilter.css"; // 👈 css riêng

const TourFilter = ({ keyword, setKeyword }) => {
  return (
    <div className="tour-filter">
      <h2>Lọc kết quả</h2>
      <div className="filter-section">
        <h3>Tìm kiếm tour</h3>
        <input
          type="text"
          placeholder="Nhập từ khóa..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="filter-section">
        <h3>Xếp hạng sao</h3>
        <p className="hint">Chưa có filter cụ thể</p>
      </div>
      <div className="filter-section">
        <h3>Tiện ích</h3>
        <p className="hint">Chưa có filter cụ thể</p>
      </div>
    </div>
  );
};

export default TourFilter;
