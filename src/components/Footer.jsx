import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo + giới thiệu */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <div
                className="bg-teal rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                <span className="text-white fw-bold">M</span>
              </div>
              <span className="fs-4 fw-semibold">ViVu Tour</span>
            </div>
            <p className="text-muted">
              Nền tảng đặt tour du thuyền Hạ Long hàng đầu Việt Nam
            </p>
          </div>

          {/* Dịch vụ */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Dịch vụ</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted hover-link"
                >
                  Du thuyền Hạ Long
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted hover-link"
                >
                  Khách sạn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted hover-link"
                >
                  Vé máy bay
                </a>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Hỗ trợ</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted hover-link"
                >
                  Liên hệ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted hover-link"
                >
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted hover-link"
                >
                  Chính sách
                </a>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Liên hệ</h5>
            <p className="text-muted mb-1">Hotline: 0922222016</p>
            <p className="text-muted">Email: info@mixivivu.com</p>

            {/* Social icons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-light fs-5">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="border-top border-secondary pt-4 mt-4 text-center text-muted">
          <p className="mb-0">
            &copy; 2025 ViVu Tour. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
