import React from "react";
import TourCard from "./TourCard";
import "./TourList.css"; // 👈 css riêng

const TourList = ({ tours }) => {
  if (!tours || tours.length === 0) {
    return <p className="no-tours">Không có tour nào.</p>;
  }

  return (
    <div className="tour-list">
      {tours.map((t) => (
        <TourCard key={t.tourId} tour={t} />
      ))}
    </div>
  );
};

export default TourList;
