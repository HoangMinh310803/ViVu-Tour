import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TourCard from "../TourCard/TourCard";
import "./Sidebar.css";
import apiConfig from "../../../apiConfig";

const Sidebar = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await apiConfig.get("/api/Tour/GetAllTours");
        // axios trả về data trực tiếp
        const data = response.data;
        setTours(data.slice(0, 5)); // lấy top 3
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  const handleTourClick = (id) => {
    navigate(`/tour/${id}`);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>SẢN PHẨM PHỔ BIẾN</h3>
      </div>
      <div className="sidebar-content">
        {tours.map((tour) => (
          <TourCard
            key={tour.tourId}
            tour={tour}
            onClick={() => handleTourClick(tour.tourId)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
