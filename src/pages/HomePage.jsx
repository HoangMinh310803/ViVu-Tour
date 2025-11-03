import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CruiseGrid from "../components/CruiseGrid";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";xxxx
import {
  cruisesData,
  testimonialsData,
  customerCategoriesData,
} from "../data/cruiseData";

import { getAllTours } from "../services/tourService";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getAllTours();
        setTours(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Đang tải dữ liệu...</div>;
  }

  const handleSearch = (searchData) => {
    console.log("Search data:", searchData);
    // Implement search logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection onSearch={handleSearch} />

      <CruiseGrid
        tours={showAll ? tours : tours.slice(0, 3)}
         title="Tour nổi bật"
         description="Khám phá những tour du lịch hấp dẫn nhất"
         onShowAll={() => setShowAll(true)}
      />

      <TestimonialSection
        testimonials={testimonialsData}
        customerCategories={customerCategoriesData}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
