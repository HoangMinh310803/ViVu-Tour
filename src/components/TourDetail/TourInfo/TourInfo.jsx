import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../apiConfig";
import "./TourInfo.css";
import TourConditionsTabs from "./TourConditionsTabs";
const TourInfo = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await apiClient.get(`/api/Tour/${id}`);
        setTour(response.data);
      } catch (err) {
        setError(err.message || "Lỗi không xác định");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchTour();
  }, [id]);

  if (loading) return <p>Đang tải dữ liệu tour...</p>;
  if (error) return <p style={{ color: "red" }}>Lỗi: {error}</p>;
  if (!tour) return <p>Không tìm thấy thông tin tour</p>;

  return (
    <section className="tour-info-section">
      <div className="tour-info-header">
        <h3>THÔNG TIN CHI TIẾT TOUR</h3>
      </div>

      <div className="tour-info-content">
        <div className="tour-details">
          <TourConditionsTabs tour={tour} />
        </div>
      </div>
    </section>
  );
};

export default TourInfo;
