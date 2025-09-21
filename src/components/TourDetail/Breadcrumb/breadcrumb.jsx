import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <a href="#" className="breadcrumb-link">Trang chủ</a>
      <span className="breadcrumb-separator">›</span>
      <a href="#" className="breadcrumb-link">Tour du lịch Kích Cầu</a>
      <span className="breadcrumb-separator">›</span>
      <span className="breadcrumb-current">Tour Sapa Giá Rẻ Kinh Nghiệm Du Lịch Cập Nhật Mới 2025</span>
    </nav>
  );
};

export default Breadcrumb;