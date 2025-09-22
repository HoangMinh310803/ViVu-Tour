import React from 'react';
import Header1 from "../components/Header";
import Header2 from '../components/TourDetail/Header/Header';
import MainContent from '../components/TourDetail/MainContent/MainContent';
import FloatingButtons from '../components/TourDetail/FloatingButtons/FloatingButtons';
import './TourDetailPage.css';
import Footer from '../components/Footer';
function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <MainContent />
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;