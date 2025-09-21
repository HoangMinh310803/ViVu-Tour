import React from 'react';
import TourDetail from '../TourDetail/TourDetail';
import Sidebar from '../Sidebar/Sidebar';
import TourInfo from '../TourInfo/TourInfo';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-content">
            <TourDetail />
            <TourInfo />
          </div>
          <div className="right-content">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;