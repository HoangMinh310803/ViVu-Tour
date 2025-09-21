import React from "react";
import CruiseCard from "./CruiseCard";

const CruiseGrid = ({ cruises, title, description }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Tiêu đề */}
        <div className="mb-5 text-center text-md-start">
          <h2 className="h3 fw-bold text-dark mb-3">{title}</h2>
          <p className="text-muted fs-6">{description}</p>
        </div>

        {/* Grid hiển thị card */}
        <div className="row g-4">
          {cruises.map((cruise) => (
            <div className="col-12 col-md-6 col-lg-4" key={cruise.id}>
              <CruiseCard cruise={cruise} />
            </div>
          ))}
        </div>

        {/* Nút xem tất cả */}
        <div className="text-center mt-5">
          <button
            className="btn btn-link text-decoration-none fw-medium d-inline-flex align-items-center"
            style={{ color: "#14b8a6" }}
          >
            Xem tất cả Du thuyền
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ms-2"
              viewBox="0 0 24 24"
            >
              <path d="M17 8l4 4-4 4M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CruiseGrid;
