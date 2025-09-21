import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CruiseGrid from "../components/CruiseGrid";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import {
  cruisesData,
  testimonialsData,
  customerCategoriesData,
} from "../data/cruiseData";

const HomePage = () => {
  const handleSearch = (searchData) => {
    console.log("Search data:", searchData);
    // Implement search logic here
  };

  const cruiseGridConfig = {
    title: "Du thuyền mới và phổ biến nhất",
    description:
      "Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá một hành trình với đầy đủ tiện nghi vào thế giới của sự sang trọng, tiện nghi và trải nghiệm khó thể quên.",
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection onSearch={handleSearch} />

      <CruiseGrid
        cruises={cruisesData}
        title={cruiseGridConfig.title}
        description={cruiseGridConfig.description}
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
