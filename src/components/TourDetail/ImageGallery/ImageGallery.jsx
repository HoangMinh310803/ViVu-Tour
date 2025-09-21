import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images = [] }) => {
  // nếu API không có ảnh thì fallback về danh sách mặc định
  const defaultImages = [
    {
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
      alt: 'Sapa tour main image'
    },
    {
      src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80',
      alt: 'Sapa landscape'
    },
    {
      src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80',
      alt: 'Mountain view'
    }
  ];

  const galleryImages = images.length > 0 
    ? images.map(img => ({
        src: img.imageUrl || img.src, // API có thể trả "url" hoặc "src"
        alt: img.alt || "Tour image"
      }))
    : defaultImages;

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img 
          src={galleryImages[selectedImage].src} 
          alt={galleryImages[selectedImage].alt}
        />
        <div className="tour-badge">Tour Pro</div>
      </div>
      
      <div className="thumbnail-list">
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
