import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";

const HeroSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const handleSearch = () => {
    onSearch({ searchTerm, location, priceRange });
  };

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to bottom right, #f0fdfa, #dcfce7)",
      }}
    >
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-dark display-5 mb-3">
            Hãy đến với ViVu Tour?
          </h1>
          <p className="fs-5 text-muted">
            Hơn 100 tour khắp các tỉnh miền Bắc giá tốt đang chờ bạn
          </p>
        </div>

        {/* Search Box */}
        <div
          className="bg-white rounded-4 shadow p-4 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <div className="row g-3 align-items-center">
            {/* Search Input */}
            <div className="col-12 col-md-4 position-relative">
              <Search
                size={18}
                className="position-absolute"
                style={{
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              />
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Nhập tên Tour"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Location Select */}
            <div className="col-12 col-md-3 position-relative">
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
                <option value="halong">Vịnh Hạ Long</option>
                <option value="catba">Cát Bà</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="col-12 col-md-3 position-relative">
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

            {/* Search Button */}
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
