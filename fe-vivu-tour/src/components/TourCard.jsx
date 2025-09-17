// src/components/TourCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

function TourCard() {
  return (
    <Card className="h-100 shadow-sm border-0 rounded-3">
      <Card.Img variant="top" className="rounded-top" alt="Du thuyền mẫu" />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className="text-muted">
            <i className="bi bi-geo-alt-fill me-1"></i>
            Hạ Long, Việt Nam
          </small>
          <span className="badge bg-success p-2 rounded-pill">
            <i className="bi bi-star-fill me-1"></i>
            4.8 (21 đánh giá)
          </span>
        </div>
        <Card.Title className="fw-bold">Du thuyền Mẫu Grand</Card.Title>
        <Card.Text>
          <small className="text-muted">
            Du thuyền hiện đại 2023 - Tàu vỏ kim loại - 58 phòng
          </small>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h5 className="mb-0 text-info fw-bold">5,150,000đ/khách</h5>
          <Button variant="outline-info">Đặt ngay</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TourCard;
