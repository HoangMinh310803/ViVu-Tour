import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FiCalendar, FiUser, FiPhone, FiMail, FiEdit3, FiUsers, FiClock } from "react-icons/fi";
import apiConfig from "../../../apiConfig";
import authService from "../../../authService";
const ZaloButton = ({ phoneNumber, label, style }) => (
  <a href={`https://zalo.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" style={style.zaloButton}>
    <img src="https://res.cloudinary.com/dp15bjk0a/image/upload/v1759972785/2048px-Icon_of_Zalo.svg_eyypss.png" alt="Zalo Icon" style={style.zaloIcon} />
    {label}
  </a>
);
// --- Kết thúc phần giả lập ---

const BookingForm = ({ tourPrice, tourId, onQuantityChange }) => {
  // --- Định nghĩa tất cả các Style Objects ở đây ---
  const styles = {
    bookingCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      padding: '20px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      border: '1px solid #e2e8f0',
    },
    quantitySelector: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    quantityLabel: {
      fontSize: '25px',
      fontWeight: 600,
      color: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    quantityInput: {
      width: '80px',
      padding: '10px 12px',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      textAlign: 'center',
    },
    zaloButtonContainer: {
      marginTop: '20px',
      textAlign: 'center',
    },
    zaloButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 20px',
      borderRadius: '50px',
      fontSize: '15px',
      fontWeight: 600,
      color: 'white',
      background: 'linear-gradient(45deg, #0180c7, #04a8f4)',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      textDecoration: 'none',
    },
    zaloIcon: {
      width: '20px',  
      height: '20px',
    },
    btn: {
      padding: '5px 10px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    btnPrimary: {
      backgroundColor: '#14b8a6',
      color: 'white',
    },
    btnSecondary: {
      backgroundColor: '#f1f5f9',
      color: '#64748b',
      border: '1px solid #e2e8f0',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity 0.3s ease, visibility 0.3s ease',
    },
    modalOverlayActive: {
      opacity: 1,
      visibility: 'visible',
    },
    modalContainer: {
      background: '#ffffff',
      borderRadius: '12px',
      maxWidth: '550px',
      width: '90%',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transform: 'scale(0.95)',
      transition: 'transform 0.3s ease',
    },
    modalContainerActive: {
      transform: 'scale(1)',
    },
    modalHeader: {
      padding: '20px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #e2e8f0',
    },
    modalTitle: {
      margin: 0,
      fontSize: '22px',
      color: '#0f172a',
    },
    closeBtn: {
      background: 'none',
      border: 'none',
      fontSize: '28px',
      color: '#64748b',
      cursor: 'pointer',
    },
    modalBody: {
      padding: '30px',
      overflowY: 'auto',
      flexGrow: 1,
    },
    formGroup: {
      marginBottom: '20px',
    },
    formLabel: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 500,
      color: '#475569',
      fontSize: '14px',
    },
    inputWithIcon: {
      position: 'relative',
    },
    inputIcon: {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#64748b',
    },
    textareaIcon: {
        position: 'absolute',
        left: '15px',
        top: '18px',
        color: '#64748b',
    },
    formInput: {
      width: '100%',
      padding: '12px 15px 12px 45px',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      backgroundColor: '#f8fafc',
      boxSizing: 'border-box',
      color: '#0f172a',
      appearance: 'none',
    },
    selectInput: {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.7rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem',
    },
    readonlyInput: {
      backgroundColor: '#e9ecef',
      cursor: 'not-allowed',
    },
    modalFooter: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
      padding: '20px 30px',
      borderTop: '1px solid #e2e8f0',
    },
  };
  
  // --- States và Logic của component ---
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const initialFormData = { fullName: "", phoneNumber: "", email: "", scheduleId: "", notes: "" , totalAmount: tourPrice * quantity};
  const [formData, setFormData] = useState(initialFormData);
  const [schedules, setSchedules] = useState([]);
  const [isLoadingSchedules, setIsLoadingSchedules] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const user = authService.getUser();
  useEffect(() => {
    const fetchSchedules = async () => {
      if (!tourId) return;
      setIsLoadingSchedules(true);
      setError(null);
      try {
        const response = await apiConfig.get(`/api/Tour/${tourId}/schedules`);
        setSchedules(response.data);
      } catch (err) {
        setError("Không thể tải được lịch trình.");
      } finally {
        setIsLoadingSchedules(false);
      }
    };
    fetchSchedules();
  }, [tourId]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    setQuantity(value);
    if (onQuantityChange) onQuantityChange(value);
  };

  const handleBookingClick = () => {
    if (!quantity || quantity < 1) {
      Swal.fire({ icon: "warning", title: "Số lượng không hợp lệ" });
      return;
    }
    if (user) setShowModal(true);
    else navigate("/login");
  };

  const handleCloseModal = () => !isSubmitting && setShowModal(false);
  const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.scheduleId) {
      Swal.fire({ icon: "error", title: "Thiếu thông tin bắt buộc (*)" });
      return;
    }
    setIsSubmitting(true);
    // Tính toán tổng tiền ngay trước khi gửi
    const finalTotalAmount = tourPrice * quantity;

    // Tạo payload để gửi đi, đảm bảo tính nhất quán
    const bookingData = {
      tourId: tourId,
      userId: user.UserId,
      numberOfPeople: quantity, // Sử dụng 'quantity'
      ...formData,
      totalAmount: finalTotalAmount, // Ghi đè giá trị totalAmount cũ
    };
    console.log("Dữ liệu gửi đi:", bookingData);
    try {
      await apiConfig.post('/api/Booking/CreateBooking', bookingData);
      Swal.fire({ icon: "success", title: "Đặt tour thành công!" });
      setShowModal(false);
      setFormData(initialFormData);
    } catch (err) {
      Swal.fire({ icon: "error", title: "Đã có lỗi xảy ra" });
    } finally {
      setIsSubmitting(false);
    }
  };
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  // --- JSX với Inline Styles ---
  return (
    <>
      <div style={styles.bookingCard}>
        <div style={styles.quantitySelector}>
          <label htmlFor="quantity" style={styles.quantityLabel}><FiUsers /></label>
          <input
            type="number" id="quantity" min="1"
            value={quantity} onChange={handleQuantityChange}
            style={styles.quantityInput}
          />
        </div>
        <button onClick={handleBookingClick} style={{ ...styles.btn, ...styles.btnPrimary }}>
          <FiCalendar style={{ fontSize: '20px' }} /> ĐẶT TOUR NGAY
        </button>
      </div>
      <div style={styles.zaloButtonContainer}>
        <ZaloButton
          phoneNumber="0987654321"
          label="Cần tư vấn? Chat qua Zalo!"
          style={{ zaloButton: styles.zaloButton, zaloIcon: styles.zaloIcon }}
        />
      </div>

      {/* Modal */}
      <div style={{ ...styles.modalOverlay, ...(showModal && styles.modalOverlayActive) }} onClick={handleCloseModal}>
        <div style={{ ...styles.modalContainer, ...(showModal && styles.modalContainerActive) }} onClick={(e) => e.stopPropagation()}>
          <div style={styles.modalHeader}>
            <h2 style={styles.modalTitle}>Thông tin đặt tour</h2>
            <button style={styles.closeBtn} onClick={handleCloseModal} disabled={isSubmitting}>×</button>
          </div>

          <div style={styles.modalBody}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.formLabel}>Họ và tên *</label>
              <div style={styles.inputWithIcon}>
                <FiUser style={styles.inputIcon} />
                <input type="text" id="name" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Ví dụ: Nguyễn Văn A" required style={styles.formInput} />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="phone" style={styles.formLabel}>Số điện thoại *</label>
              <div style={styles.inputWithIcon}>
                <FiPhone style={styles.inputIcon} />
                <input type="tel" id="phone" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Nhập số điện thoại của bạn" required style={styles.formInput} />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.formLabel}>Email</label>
              <div style={styles.inputWithIcon}>
                <FiMail style={styles.inputIcon} />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Nhập địa chỉ email (không bắt buộc)" style={styles.formInput} />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="scheduleId" style={styles.formLabel}>Ngày khởi hành *</label>
              <div style={styles.inputWithIcon}>
                <FiCalendar style={styles.inputIcon} />
                <select id="scheduleId" name="scheduleId" value={formData.scheduleId} onChange={handleInputChange} required style={{...styles.formInput, ...styles.selectInput}}>
                  <option value="" disabled>{isLoadingSchedules ? "Đang tải..." : "--- Chọn ngày khởi hành ---"}</option>
                  {error && <option disabled>{error}</option>}
                  {!isLoadingSchedules && schedules.length === 0 && !error && (<option disabled>Không có lịch trình</option>)}
                  {schedules.map(s => <option key={s.scheduleId} value={s.scheduleId} disabled={s.availableSlots <= 0}>{`${formatDate(s.startDate)} - ${s.availableSlots > 0 ? `Còn ${s.availableSlots} chỗ` : "Hết chỗ"}`}</option>)}
                </select>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="quantity-display" style={styles.formLabel}>Số lượng người</label>
              <div style={styles.inputWithIcon}>
                <FiUsers style={styles.inputIcon} />
                <input type="text" id="quantity-display" value={`${quantity} người`} readOnly style={{ ...styles.formInput, ...styles.readonlyInput }} />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="note" style={styles.formLabel}>Ghi chú</label>
              <div style={styles.inputWithIcon}>
                <FiEdit3 style={styles.textareaIcon} />
                <textarea id="note" name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Yêu cầu đặc biệt..." rows="3" style={styles.formInput} />
              </div>
            </div>
          </div>
          
          <div style={styles.modalFooter}>
            <button type="button" onClick={handleCloseModal} disabled={isSubmitting} style={{ ...styles.btn, ...styles.btnSecondary }}>Hủy</button>
            <button type="button" onClick={handleSubmit} disabled={isSubmitting} style={{ ...styles.btn, ...styles.btnPrimary, ...(isSubmitting && { opacity: 0.6, cursor: 'not-allowed' }) }}>
              {isSubmitting ? <><FiClock /> Đang xử lý...</> : "Xác nhận đặt tour"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;