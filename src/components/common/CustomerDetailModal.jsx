import React from "react";
import { X as XIcon } from "lucide-react";
import { styles } from "../../styles";
import {
  getCustomerStatusStyle,
  getCustomerStatusText,
  getInitials,
} from "../../utils";

const DetailRow = ({ label, value, isStatus = false }) => (
  <div style={{ marginBottom: "12px", display: "flex" }}>
    <strong style={{ width: "120px", color: "#4b5563" }}>{label}:</strong>
    {isStatus ? value : <span style={{ color: "#1f2937" }}>{value}</span>}
  </div>
);

const CustomerDetailModal = ({ customer, onClose, isOpen }) => {
  if (!isOpen || !customer) {
    return null;
  }

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ ...styles.customerAvatar, marginRight: 0 }}>
              {getInitials(customer.fullName)}
            </div>
            <h3 style={styles.modalTitle}>Chi tiết Khách hàng</h3>
          </div>
          <button onClick={onClose} style={styles.modalCloseButton}>
            <XIcon size={20} />
          </button>
        </div>
        <div style={styles.modalBody}>
          <DetailRow label="Mã KH" value={customer.userId} />
          <DetailRow label="Tên" value={customer.fullName} />
          <DetailRow label="Email" value={customer.email} />
          <DetailRow label="Điện thoại" value={customer.phone} />
          <DetailRow label="Ngày tham gia" value={customer.createdDate} />
          <DetailRow
            label="Trạng thái"
            isStatus={true}
            value={
              <span style={getCustomerStatusStyle(customer.isActive, styles)}>
                {getCustomerStatusText(customer.isActive)}
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

export default CustomerDetailModal;
