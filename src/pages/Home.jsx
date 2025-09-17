import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import TourCard from "../components/TourCard";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TourCard />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
