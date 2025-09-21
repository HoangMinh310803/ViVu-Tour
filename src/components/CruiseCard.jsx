import React from "react";
import { Star, MapPin, Calendar, Users } from "lucide-react";

const CruiseCard = ({ cruise }) => {
  return (
    <div className="card border-0 shadow-lg rounded-3 overflow-hidden h-100">
      {/* Ảnh + Rating */}
      <div className="position-relative">
        <img
          src={cruise.image}
          alt={cruise.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div
          className="position-absolute top-0 start-0 m-3 bg-warning text-dark px-3 py-1 rounded-pill d-flex align-items-center small fw-medium"
          style={{ fontSize: "0.85rem" }}
        >
          <Star size={14} className="me-1" fill="currentColor" />
          {cruise.rating} ({cruise.reviews}) đánh giá
        </div>
      </div>

      {/* Nội dung */}
      <div className="card-body p-4">
        {/* Địa điểm */}
        <div className="d-flex align-items-center text-info small mb-2">
          <MapPin size={14} className="me-1" />
          {cruise.bay}
        </div>

        {/* Tên du thuyền */}
        <h5 className="card-title fw-bold text-dark mb-3">{cruise.name}</h5>

        {/* Năm + Số phòng */}
        <div className="d-flex text-muted small mb-3 gap-4">
          <div className="d-flex align-items-center">
            <Calendar size={14} className="me-1" />
            Hạ thủy {cruise.year}
          </div>
          <div className="d-flex align-items-center">
            <Users size={14} className="me-1" />
            {cruise.rooms} phòng
          </div>
        </div>

        {/* Giá + Button */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="fs-5 fw-bold text-dark">
              {cruise.price.toLocaleString("vi-VN")}₫
            </span>
            <span className="text-muted">/ khách</span>
          </div>
          <button
            className="btn text-white px-4 py-2"
            style={{ backgroundColor: "#14b8a6" }}
          >
            {cruise.status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseCard;
