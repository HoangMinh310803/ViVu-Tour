import React from "react";
import { X as XIcon } from "lucide-react";
import { styles } from "../../styles";
import { getTourStatusStyle, getTourStatusText } from "../../utils";

const DetailRow = ({ label, value, isStatus = false }) => (
  <div style={{ marginBottom: "12px", display: "flex" }}>
    <strong style={{ width: "120px", color: "#4b5563", flexShrink: 0 }}>
      {label}:
    </strong>
    {isStatus ? value : <span style={{ color: "#1f2937" }}>{value}</span>}
  </div>
);

const TourDetailModal = ({ isOpen, tour, onClose }) => {
  if (!isOpen || !tour) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>Chi tiết Tour - #{tour.tourId}</h3>
          <button onClick={onClose} style={styles.modalCloseButton}>
            <XIcon size={20} />
          </button>
        </div>
        <div style={styles.modalBody}>
          <DetailRow label="Tên Tour" value={tour.tourName} />
          <DetailRow label="Điểm đến" value={tour.destination} />
          <DetailRow label="Mô tả" value={tour.description} />
          <DetailRow label="Thời gian" value={`${tour.duration} ngày`} />
          <DetailRow
            label="Giá"
            value={new Intl.NumberFormat("vi-VN").format(tour.price) + "đ"}
          />
          <DetailRow label="Số khách" value={tour.maxParticipants} />
          <DetailRow
            label="Ngày đi"
            value={new Date(tour.startDate).toLocaleDateString("vi-VN")}
          />
          <DetailRow
            label="Ngày về"
            value={new Date(tour.endDate).toLocaleDateString("vi-VN")}
          />
          <DetailRow label="Phương tiện" value={tour.transport} />
          <DetailRow
            label="Trạng thái"
            isStatus={true}
            value={
              <span style={getTourStatusStyle(tour.status, styles)}>
                {getTourStatusText(tour.status)}
              </span>
            }
          />
        </div>
        <div style={styles.modalFooter}>
          <button onClick={onClose} style={styles.secondaryButton}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourDetailModal;
