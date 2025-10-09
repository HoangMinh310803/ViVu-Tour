import React, { useState } from "react";
import { X, MapPin, Calendar, Users, Clock, DollarSign, Bus, Image, ChevronLeft, ChevronRight } from "lucide-react";

// Mock styles object for demonstration
const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(4px)'
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: '16px',
    maxWidth: '95vw',
    maxHeight: '90vh',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    position: 'relative'
  },
  modalCloseButton: {
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'absolute',
    top: '16px',
    right: '16px',
    zIndex: 10,
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  secondaryButton: {
    padding: '12px 24px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  }
};

const getTourStatusStyle = (status) => ({
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  backgroundColor: status === 'Active' ? '#dcfce7' : '#fef2f2',
  color: status === 'Active' ? '#166534' : '#dc2626'
});

const getTourStatusText = (status) => status === 'Active' ? 'Hoạt động' : 'Tạm dừng';

const InfoCard = ({ icon: Icon, label, value, color = "#3b82f6" }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: `2px solid ${color}20`,
    transition: 'all 0.2s ease'
  }}>
    <div style={{
      backgroundColor: color,
      color: 'white',
      padding: '8px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Icon size={18} />
    </div>
    <div>
      <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500', marginBottom: '2px' }}>
        {label}
      </div>
      <div style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937' }}>
        {value}
      </div>
    </div>
  </div>
);

const ImageGallery = ({ images, thumbnail }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allImages = [
    ...(thumbnail ? [{ imageUrl: thumbnail, caption: 'Hình đại diện' }] : []),
    ...(images || [])
  ].filter(img => img.imageUrl);

  if (!allImages.length) {
    return (
      <div style={{
        height: '300px',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        color: '#6b7280'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Image size={48} style={{ marginBottom: '12px', opacity: 0.5 }} />
          <p>Không có hình ảnh</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div style={{ position: 'relative', marginBottom: '24px' }}>
      <div style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#f3f4f6'
      }}>
        <img
          src={allImages[currentIndex].imageUrl}
          alt={allImages[currentIndex].caption || `Tour image ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div style={{
          display: 'none',
          height: '300px',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6b7280',
          backgroundColor: '#f3f4f6'
        }}>
          <div style={{ textAlign: 'center' }}>
            <Image size={48} style={{ marginBottom: '12px', opacity: 0.5 }} />
            <p>Không thể tải hình ảnh</p>
          </div>
        </div>
        
        {allImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
        
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {currentIndex + 1} / {allImages.length}
        </div>
      </div>
      
      {allImages[currentIndex].caption && (
        <div style={{
          textAlign: 'center',
          marginTop: '8px',
          fontSize: '14px',
          color: '#6b7280',
          fontStyle: 'italic'
        }}>
          {allImages[currentIndex].caption}
        </div>
      )}
      
      {allImages.length > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '6px',
          marginTop: '12px',
          flexWrap: 'wrap'
        }}>
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === currentIndex ? '#3b82f6' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TourDetailModal = ({ isOpen, tour, onClose }) => {
  if (!isOpen || !tour) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div 
        style={{
          ...styles.modalContainer,
          width: '900px',
          maxHeight: '90vh',
          overflow: 'auto'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          style={styles.modalCloseButton}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'white'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
        >
          <X size={20} />
        </button>

        <div style={{ padding: '24px' }}>
          {/* Header Section */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: '28px',
                fontWeight: '700',
                color: '#1f2937',
                lineHeight: '1.2'
              }}>
                {tour.tourName}
              </h2>
              <span style={getTourStatusStyle(tour.status)}>
                {getTourStatusText(tour.status)}
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#6b7280',
              fontSize: '16px'
            }}>
              <MapPin size={18} />
              <span>{tour.destination}</span>
              <span style={{ margin: '0 8px' }}>•</span>
              <span>#{tour.tourId}</span>
            </div>
          </div>

          {/* Image Gallery */}
          <ImageGallery images={tour.tourImages} thumbnail={tour.thumbnail} />

          {/* Info Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <InfoCard
              icon={Clock}
              label="Thời gian"
              value={`${tour.duration} ngày`}
              color="#f59e0b"
            />
            <InfoCard
              icon={DollarSign}
              label="Giá tour"
              value={new Intl.NumberFormat("vi-VN").format(tour.price) + "đ"}
              color="#10b981"
            />
            <InfoCard
              icon={Users}
              label="Số khách tối đa"
              value={`${tour.maxParticipants} người`}
              color="#8b5cf6"
            />
            <InfoCard
              icon={Bus}
              label="Phương tiện"
              value={tour.transport || 'Chưa xác định'}
              color="#06b6d4"
            />
            <InfoCard
              icon={Calendar}
              label="Ngày khởi hành"
              value={new Date(tour.startDate).toLocaleDateString("vi-VN")}
              color="#ef4444"
            />
            <InfoCard
              icon={Calendar}
              label="Ngày kết thúc"
              value={new Date(tour.endDate).toLocaleDateString("vi-VN")}
              color="#ef4444"
            />
          </div>

          {/* Description Section */}
          {tour.description && (
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
                borderBottom: '2px solid #e5e7eb',
                paddingBottom: '8px'
              }}>
                Mô tả tour
              </h3>
              <div 
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  lineHeight: '1.6',
                  color: '#374151'
                }}
                dangerouslySetInnerHTML={{ __html: tour.description }}
              />
            </div>
          )}
          {tour.tourSchedules && tour.tourSchedules.length > 0 && (
            <div style={{ marginBottom: '24px'}}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
                borderBottom: '2px solid #e5e7eb',
                paddingBottom: '8px'
              }}>
                Lịch trình tour
              </h3>
              <div style={{ display: 'flex', gap: '16px' }}>
                {tour.tourSchedules.map((schedule, index) => (
                  <div key={index} style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      backgroundColor: '#0D7A6E',
                      color: 'white',
                      padding: '12px 20px',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}>
                      {new Date(schedule.startDate).toLocaleDateString("vi-VN")}
                    </div>
                    <div style={{
                      padding: '20px',
                      lineHeight: '1.6',
                      color: '#374151'
                    }}>
                      <p>Số chỗ còn trống: <strong>{schedule.availableSlots}</strong></p>
                      <p>Ghi chú: <strong>{schedule.note}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Tour Conditions */}
          {tour.tourConditions && tour.tourConditions.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
                borderBottom: '2px solid #e5e7eb',
                paddingBottom: '8px'
              }}>
                Điều kiện & Lưu ý
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {tour.tourConditions.map((condition, index) => (
                  <div key={index} style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      padding: '12px 20px',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}>
                      {condition.title}
                    </div>
                    <div 
                      style={{
                        padding: '20px',
                        lineHeight: '1.6',
                        color: '#374151'
                      }}
                      dangerouslySetInnerHTML={{ __html: condition.content }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '20px 24px',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#f8fafc',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button 
            onClick={onClose} 
            style={{
              ...styles.secondaryButton,
              padding: '12px 32px',
              fontSize: '16px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f4f6'}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
export default TourDetailModal;
