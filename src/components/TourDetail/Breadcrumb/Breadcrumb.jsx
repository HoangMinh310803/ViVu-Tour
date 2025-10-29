import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-link">
        Trang chủ
      </Link>
      <span className="breadcrumb-separator">›</span>
      <Link to="/toursearch" className="breadcrumb-link">
        Tour du lịch Kích Cầu
      </Link>
      {/* <span className="breadcrumb-separator">›</span>
      <span className="breadcrumb-current">Tour Sapa Giá Rẻ Kinh Nghiệm Du Lịch Cập Nhật Mới 2025</span> */}
    </nav>
  );
};

export default Breadcrumb;
