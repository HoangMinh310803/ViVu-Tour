import React from "react";
import "./Pagination.css"; // import CSS riêng

const Pagination = ({ total, page, setPage, limit }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pagination-container">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="pagination-btn"
      >
        Trước
      </button>

      <span className="pagination-info">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="pagination-btn"
      >
        Tiếp
      </button>
    </div>
  );
};

export default Pagination;
