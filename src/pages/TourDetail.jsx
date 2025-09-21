import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTourById } from "../services/tourService";
import Header from "../components/Header";

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getTourById(id);
        setTour(data);
      } catch (error) {
        console.error("Lỗi khi lấy detail tour:", error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!tour) return <p>Đang tải...</p>;

  return (
    <div className="tour-detail">
      <Header />
      {/* Hero Section */}
      <div className="hero py-4 ">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-bold">{tour.tourName}</h2>
            <div className="text-muted">
              <i className="bi bi-geo-alt"></i> {tour.destination}
            </div>
          </div>
          <h3 className="text-primary fw-bold">
            {tour.price.toLocaleString("vi-VN")} đ/khách
          </h3>
        </div>
      </div>

      {/* Gallery */}
      <div className="container my-4">
        <div className="row g-3">
          <div className="col-md-8">
            <img
              src={tour.thumbnail}
              alt={tour.tourName}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-4 d-flex flex-column gap-2">
            {tour.tourImages?.slice(0, 4).map((img) => (
              <img
                key={img.imageId}
                src={img.imageUrl}
                alt={img.caption}
                className="img-fluid rounded"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container my-5">
        <ul className="nav nav-tabs" id="tourTabs" role="tablist">
          <li className="nav-item">
            <button
              className="nav-link active"
              id="overview-tab"
              data-bs-toggle="tab"
              data-bs-target="#overview"
              type="button"
            >
              Đặc điểm
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              id="info-tab"
              data-bs-toggle="tab"
              data-bs-target="#info"
              type="button"
            >
              Giới thiệu
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              id="rules-tab"
              data-bs-toggle="tab"
              data-bs-target="#rules"
              type="button"
            >
              Quy định
            </button>
          </li>
        </ul>

        <div className="tab-content p-3 border border-top-0 rounded-bottom">
          {/* Overview */}
          <div
            className="tab-pane fade show active"
            id="overview"
            role="tabpanel"
          >
            <div dangerouslySetInnerHTML={{ __html: tour.description }} />
          </div>

          {/* Info */}
          <div className="tab-pane fade" id="info" role="tabpanel">
            <h5>Điều kiện tham gia</h5>
            {tour.tourConditions?.map((cond) => (
              <div key={cond.conditionId} className="mb-3">
                <h6 className="fw-bold">{cond.title}</h6>
                <div dangerouslySetInnerHTML={{ __html: cond.content }} />
              </div>
            ))}
          </div>

          {/* Rules */}
          <div className="tab-pane fade" id="rules" role="tabpanel">
            <p>Các quy định, chính sách hủy tour sẽ được hiển thị tại đây…</p>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <div className="border rounded p-3 shadow-sm">
              <h6 className="fw-bold">Thông tin tour</h6>
              <p>
                <strong>Thời lượng:</strong> {tour.duration} ngày
              </p>
              <p>
                <strong>Phương tiện:</strong> {tour.transport}
              </p>
              <p>
                <strong>Hành trình:</strong> {tour.destination}
              </p>
              <button className="btn btn-primary w-100 mt-3">Đặt ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
