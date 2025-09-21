import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          TOUR DU LỊCH GIÁ RẺ KINH NGHIỆM DU LỊCH CẬP NHẬT MỚI 2025
        </h1>
        <Breadcrumb />
      </div>
    </header>
  );
};

export default Header;