import React, { useEffect, useState } from "react";
import TourFilter from "../components/TourFilter";
import TourList from "./TourList";
import Pagination from "../components/Pagination";
import { getTourSearch, getAllTours } from "../services/tourService";
import "./TourSearchPage.css"; // 👈 import css riêng
import Header from "../components/Header";
import Footer from "../components/Footer";

const TourSearchPage = () => {
  const [tours, setTours] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        let data;
        if (keyword.trim() === "") {
          data = await getAllTours();
        } else {
          data = await getTourSearch(keyword);
        }
        setTours(data || []);
        setTotal(data.length);
      } catch (error) {
        console.error("Lỗi khi tải tour:", error);
        setTours([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, [keyword]);

  const paginatedTours = tours.slice((page - 1) * limit, page * limit);

  return (
    <div className="tour-search-container">
      <Header />
      <div className="search-box">
        <h1>Bạn lựa chọn tour nào?</h1>
        <div className="search-input">
          <input
            type="text"
            placeholder="Nhập từ khóa "
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

      <div className="main-content">
        <div className="sidebar">
          <TourFilter keyword={keyword} setKeyword={setKeyword} />
        </div>
        <div className="tour-list-container">
          <div className="list-header">
            <h2>Tìm thấy {total} kết quả</h2>
            <span>Không sắp xếp</span>
          </div>

          {loading ? (
            <p className="loading">Đang tải dữ liệu...</p>
          ) : (
            <TourList tours={paginatedTours} />
          )}

          <Pagination
            total={total}
            page={page}
            setPage={setPage}
            limit={limit}
          />
        </div>
      </div>
    </div>
  );
};

export default TourSearchPage;
