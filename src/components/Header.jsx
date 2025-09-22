import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo + Tên */}
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-2">
              <div
                className="d-flex align-items-center justify-content-center bg-teal rounded-circle"
                style={{ width: "32px", height: "32px" }}
              >
                <span className="text-white fw-bold small">M</span>
              </div>
            </div>
            <span className="fs-4 fw-semibold text-dark">ViVu Tour</span>
          </div>

          {/* Navbar */}
          <nav className="d-none d-md-flex gap-4">
            <Link
              to="/toursearch"
              className="text-decoration-none text-dark link-hover"
            >
              Tìm Tour
            </Link>
            <a href="#" className="text-decoration-none text-dark link-hover">
              Tìm vé máy bay
            </a>
            <a href="#" className="text-decoration-none text-dark link-hover">
              Tìm khách sạn
            </a>
            <a href="#" className="text-decoration-none text-dark link-hover">
              Doanh nghiệp
            </a>
            <a href="#" className="text-decoration-none text-dark link-hover">
              Blog
            </a>
          </nav>

          {/* Hotline + Button */}
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center text-secondary small">
              <Phone size={16} className="me-1" />
              <span>Hotline: 0922222016</span>
            </div>
            <button
              className="btn btn-sm text-white px-3 py-2"
              style={{ backgroundColor: "#14b8a6" }}
            >
              Liên hệ ViVu Tour
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
