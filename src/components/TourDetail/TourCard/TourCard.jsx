import React from "react";
import "./TourCard.css";

const TourCard = ({ tour, onClick }) => {
  return (
    <div className="tour-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="tour-card-image">
        <img src={tour.thumbnail} alt={tour.tourName} />
      </div>
      <div className="tour-card-content">
        <h4 className="tour-card-title">{tour.tourName}</h4>
        <div className="tour-card-price">
          {tour.price ? tour.price.toLocaleString("vi-VN") + "đ" : "Liên hệ"}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
