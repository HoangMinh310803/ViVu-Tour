import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../ImageGallery/ImageGallery";
import BookingForm from "../BookingForm/BookingForm";
import apiClient from "../../../apiConfig";
import "./TourDetail.css";

const TourDetail = () => {
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

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: "red" }}>Lỗi: {error}</p>;
  if (!tour) return <p>Không có dữ liệu tour</p>;

  return (
    <div className="tour-detail">
      <div className="tour-detail-content">
        <div className="tour-images">
          <ImageGallery images={tour.tourImages || []} />
        </div>

        <div className="tour-info">
          <h2 className="tour-title">{tour.tourName || "Tên tour"}</h2>

          <div className="tour-meta">
            <span className="tour-brand">
              <strong>Thời gian tour: </strong>{" "}
              {tour.duration + " ngày" || "0 ngày"} 
            </span>
            <span className="tour-status">
              <strong>Tình trạng: </strong>{" "}
              {tour.isActive ? "Còn tour" : "Hết tour"}
            </span>
          </div>

          <div className="tour-price">
            <span className="price">
              {tour.price
                ? tour.price.toLocaleString("vi-VN") + "đ"
                : "Liên hệ"}
            </span>
          </div>

          <div
            className="tour-description prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: tour.description || "<p>Chưa có mô tả</p>",
            }}
          />

          <BookingForm />

          <div className="contact-info">
            <span>Gọi </span>
            <a href="tel:0963222945" className="phone-number">
              0989.423.251
            </a>
            <span> để được trợ giúp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
