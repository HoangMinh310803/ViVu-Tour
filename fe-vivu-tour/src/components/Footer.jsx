// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Cột 1: Logo và giới thiệu */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">MixiViVu</h5>
            <p className="text-muted">
              MixiViVu chuyên cung cấp các tour du thuyền cao cấp và trải nghiệm
              du lịch độc đáo.
            </p>
          </Col>

          {/* Cột 2: Liên kết nhanh */}
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Thông tin</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#tours" className="text-white text-decoration-none">
                  Danh sách tour
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </Col>

          {/* Cột 3: Hỗ trợ */}
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Hỗ trợ</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#faq" className="text-white text-decoration-none">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white text-decoration-none">
                  Điều khoản & Điều kiện
                </a>
              </li>
              <li>
                <a href="#policy" className="text-white text-decoration-none">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </Col>

          {/* Cột 4: Liên hệ và Mạng xã hội */}
          <Col md={4}>
            <h5 className="fw-bold">Theo dõi chúng tôi</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
            <div className="mt-3">
              <p className="mb-1">
                <i className="bi bi-telephone-fill me-2"></i> Hotline:
                0922222016
              </p>
              <p className="mb-0">
                <i className="bi bi-envelope-fill me-2"></i>{" "}
                contact@mixivivu.com
              </p>
            </div>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: "rgba(255,255,255,0.2)" }} />
        <Row>
          <Col className="text-center text-muted">
            <small>
              &copy; {new Date().getFullYear()} MixiViVu. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
