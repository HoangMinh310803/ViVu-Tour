import React from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleMessenger = () => {
    // Placeholder for Messenger functionality
    alert('Messenger chat will open');
  };

  const handleZalo = () => {
    // Placeholder for Zalo functionality  
    alert('Zalo chat will open');
  };

  return (
    <div className="floating-buttons">
      <button 
        className="floating-btn messenger-btn"
        onClick={handleMessenger}
        title="Chat Messenger"
      >
        <span className="btn-icon">💬</span>
      </button>
      
      <button 
        className="floating-btn zalo-btn" 
        onClick={handleZalo}
        title="Chat Zalo"
      >
        <span className="btn-icon">Z</span>
      </button>
      
      <button 
        className="floating-btn phone-btn" 
        onClick={() => handleCall('0963851651')}
        title="Gọi ngay"
      >
        <span className="btn-icon">📞</span>
      </button>
      
      <div className="floating-contact-info">
        <div className="contact-item">
          <span className="contact-label">Gọi ngay:</span>
          <a href="tel:0963851651" className="contact-number">0963.851.651</a>
        </div>
        
        <div className="contact-item">
          <span className="contact-label">Gọi ngay:</span>
          <a href="tel:0979961851" className="contact-number">0979.961.851</a>
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;