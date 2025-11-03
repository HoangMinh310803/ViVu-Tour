import React from "react";
import { MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CruiseCard = ({ tour }) => {
  const isNew =
    tour.createdDate &&
    new Date(tour.createdDate) >=
      new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
  const sortedTours = [...tour].sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  );
  return (
    <div className="card border-0 shadow-lg rounded-3 overflow-hidden h-100">
      {/* Ảnh */}
      <div className="position-relative">
        <img
          src={tour.thumbnail}
          alt={tour.tourName}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>
      {isNew && (
        <span
          className="badge position-absolute top-0 start-0 m-2 px-3 py-1 text-white fw-bold"
          style={{
            backgroundColor: "#ef4444",
            borderRadius: "0.5rem",
            fontSize: "0.8rem",
            textTransform: "uppercase",
          }}
        >
          New
        </span>
      )}
      {/* Nội dung */}
      <div className="card-body p-4">
        {/* Địa điểm */}
        <div className="d-flex align-items-center text-info small mb-2">
          <MapPin size={14} className="me-1" />
          {tour.destination}
        </div>

        {/* Tên Tour */}
        <h5 className="card-title fw-bold text-dark mb-3">{tour.tourName}</h5>

        {/* Thời gian + Số người */}
        <div className="d-flex text-muted small mb-3 gap-4">
          <div className="d-flex align-items-center">
            <Calendar size={14} className="me-1" />
            {tour.duration} ngày
          </div>
          <div className="d-flex align-items-center">
            <Users size={14} className="me-1" />
            Tối đa {tour.maxParticipants} người
          </div>
        </div>

        {/* Giá + Button */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            Chỉ từ{" "}
            <span className="fs-5 fw-bold text-dark">
              {tour.price.toLocaleString("vi-VN")}₫
            </span>
            <span className="text-muted">/ khách</span>
          </div>
          <Link
            to={`/tour/${tour.tourId || ""}`}
            className="btn text-white px-4 py-2"
            style={{ backgroundColor: "#14b8a6" }}
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CruiseCard;
