import React from "react";
import "./TourCard.css"; // 👈 css riêng
import ZaloButton from "./TourDetail/BookingForm/Zalo";


const TourCard = ({ tour }) => {
   
  return (
    <div className="tour-card">
      <div className="tour-card-img">
        <img src={tour.thumbnail} alt={tour.tourName} />
      </div>
      <div className="tour-card-content">
        <div>
          <h3>{tour.tourName}</h3>
          <p className="destination">{tour.destination}</p>
        </div>
        <div className="card-footer">
          <span className="price">{tour.price.toLocaleString()}đ / khách</span>
          <button className="btn-book">
            <ZaloButton
             phoneNumber="0987654321"
            label="Liên hệ ngay"
          />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default TourCard;
