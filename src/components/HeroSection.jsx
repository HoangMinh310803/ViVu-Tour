import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllTours } from "../services/tourService";

const HeroSection = ({ onSearch }) => {
  const [location, setLocation] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [locations, setLocations] = useState([]);

  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch({ location, priceRange });
    navigate("/toursearch");
  };

  // 🟢 Lấy dữ liệu thật từ API khi load trang
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getAllTours();
        const uniqueLocations = [
          ...new Set(
            data
              .map((tour) => tour.destination?.trim())
              .filter((d) => d && d !== "")
          ),
        ];
        setLocations(uniqueLocations);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tour:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to bottom right, #f0fdfa, #dcfce7)",
      }}
    >
      <div className="container">
        {/* Tiêu đề */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-dark display-5 mb-3">
            Hãy đến với ViVu Tour!
          </h1>
          <p className="fs-5 text-muted">
            Hơn 100 tour khắp các tỉnh miền Bắc giá tốt đang chờ bạn
          </p>
        </div>

        {/* Form lọc */}
        <div
          className="bg-white rounded-4 shadow p-4 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <div className="row g-3 align-items-center">
            {/* Select địa điểm */}
            <div className="col-12 col-md-5 position-relative">
              <MapPin
                size={18}
                className="position-absolute"
                style={{
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              />
              <select
                className="form-select ps-5"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="all">Tất cả địa điểm</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Select giá */}
            <div className="col-12 col-md-5 position-relative">
              <span
                className="position-absolute"
                style={{
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              >
                ₫
              </span>
              <select
                className="form-select ps-4"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">Tất cả mức giá</option>
                <option value="low">Dưới 4 triệu</option>
                <option value="mid">4-5 triệu</option>
                <option value="high">Trên 5 triệu</option>
              </select>
            </div>

            {/* Nút tìm kiếm */}
            <div className="col-12 col-md-2">
              <button
                onClick={handleSearch}
                className="btn btn-teal w-100 fw-semibold"
                style={{ backgroundColor: "#14b8a6", color: "white" }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0f766e")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#14b8a6")}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
