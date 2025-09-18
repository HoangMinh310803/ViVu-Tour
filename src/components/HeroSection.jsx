// src/components/HeroSection.jsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./HeroSection.css";

function HeroSection() {
  return (
    // Xóa style và chỉ giữ lại className
    <div className="hero-section">
      <Container>
        <div className="search-box p-4 rounded-3 shadow-lg bg-white">
          <h2 className="text-center fw-bold">
            Bạn lựa chọn du thuyền Hạ Long nào?
          </h2>
          <p className="text-center text-muted">
            Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn
          </p>
          <Form>
            <Row className="g-3">
              <Col md={4}>
                <Form.Control type="text" placeholder="Nhập tên du thuyền" />
              </Col>
              <Col md={3}>
                <Form.Select>
                  <option>Tất cả địa điểm</option>
                  <option>Hạ Long</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Form.Select>
                  <option>Tất cả mức giá</option>
                  <option>Dưới 2.000.000</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Button variant="info" className="w-100 text-white fw-bold">
                  Tìm kiếm
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
