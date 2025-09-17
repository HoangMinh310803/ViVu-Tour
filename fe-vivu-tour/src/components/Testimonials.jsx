// src/components/Testimonials.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Testimonials() {
  return (
    <div className="testimonials-section py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="fw-bold">Đánh giá từ những người đã trải nghiệm</h2>
            <p className="text-muted">
              Khách hàng chia sẻ về những kỷ niệm tuyệt vời trên chuyến du lịch
              của chúng tôi.
            </p>
          </Col>
        </Row>
        <div className="mt-4 p-5 rounded-4 shadow-sm bg-white border">
          <p className="fs-5 fst-italic">
            "Anh chọn ngày đi tàu trùng với sinh nhật vợ anh. Muốn là món quà
            tặng vợ..."
          </p>
          <p className="fw-bold mt-4">ANH KHÁNH</p>
        </div>
        {/* Thêm các slider hoặc các tab người đánh giá khác ở đây */}
      </Container>
    </div>
  );
}

export default Testimonials;
