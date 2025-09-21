import React from 'react';
import Header from '../components/TourDetail/Header/header';
import MainContent from '../components/TourDetail/MainContent/MainContent';
import FloatingButtons from '../components/TourDetail/FloatingButtons/FloatingButtons';
import './TourDetailPage.css';
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <FloatingButtons />
    </div>
  );
}

export default App;