import React from "react";
import { X as XIcon, AlertTriangle } from "lucide-react";
import { styles } from "../../styles";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>Xác nhận Xóa</h3>
          <button onClick={onClose} style={styles.modalCloseButton}>
            <XIcon size={20} />
          </button>
        </div>
        <div style={styles.modalBody}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <AlertTriangle size={48} color="#ef4444" />
            <p>
              Bạn có chắc chắn muốn xóa: <br />
              <strong>{itemName}</strong>? Hành động này không thể hoàn tác.
            </p>
          </div>
        </div>
        <div style={styles.modalFooter}>
          <button onClick={onClose} style={styles.secondaryButton}>
            Hủy
          </button>
          <button
            onClick={onConfirm}
            style={{ ...styles.primaryButton, backgroundColor: "#ef4444" }}
          >
            Xác nhận Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
