import React, { useState } from "react";
import authService from "../../../authService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const BookingForm = ({ price, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    note: "",
  });

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    setQuantity(parseInt(e.target.value));
    if (onQuantityChange) {
      onQuantityChange(value); // gửi lên parent
    }
  };
  const Navigate = useNavigate();
  const handleBooking = () => {
    if (!quantity || quantity < 1) {
      Swal.fire({
        icon: "warning",
        title: "Số lượng không hợp lệ",
        text: "Vui lòng nhập số lượng ≥ 1",
        confirmButtonText: "OK",
      });
      return;
    }
    if (user) {
      setShowModal(true);
    } else {
      Navigate("/login");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const user = authService.getUser();
  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }
    alert("Đặt tour thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
    setShowModal(false);
    setFormData({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      numOfBooking: formData.numOfBooking,
      date: formData.date,
      note: formData.note,
    });
  };

  return (
    <>
      <div className="booking-form">
        <div className="quantity-selector">
          <label htmlFor="quantity">Số lượng:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
        </div>

        <button className="btn btn-primary booking-btn" onClick={handleBooking}>
          📅 ĐẶT TOUR
        </button>
      </div>

      {/* Modal Overlay */}
      <div className={`modal-overlay ${showModal ? "active" : ""}`}>
        <div className={`modal-container ${showModal ? "active" : ""}`}>
          <div className="modal-header">
            <h2>Thông tin đặt tour</h2>
            <button className="close-btn" onClick={handleCloseModal}>
              ×
            </button>
          </div>

          <div className="booking-details-form">
            <div className="form-group">
              <label htmlFor="name">Họ và tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Số điện thoại *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Nhập địa chỉ email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Ngày khởi hành *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity-display">Số lượng người</label>
              <input
                type="text"
                id="quantity-display"
                name="numOfBooking"
                value={`${quantity} người`}
                readOnly
                className="form-input readonly"
              />
            </div>

            <div className="form-group">
              <label htmlFor="note">Ghi chú</label>
              <textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Yêu cầu đặc biệt hoặc ghi chú thêm..."
                rows="3"
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Xác nhận đặt tour
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .booking-form {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quantity-selector label {
          font-weight: 600;
          color: #333;
        }

        .quantity-input {
          width: 70px;
          padding: 8px 12px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          font-size: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .quantity-input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-primary {
          background: #14b8a6;
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .btn-secondary {
          background: #f8f9fa;
          color: #6c757d;
          border: 2px solid #dee2e6;
        }

        .btn-secondary:hover {
          background: #e9ecef;
          border-color: #adb5bd;
          transform: translateY(-1px);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
        }

        .modal-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .modal-container {
          background: white;
          border-radius: 20px;
          padding: 0;
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .modal-header {
          background: #14b8a6;
          color: white;
          padding: 25px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 30px;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .booking-details-form {
          padding: 30px;
          max-height: calc(90vh - 100px);
          overflow-y: auto;
        }

        .form-group {
          margin-bottom: 25px;
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #333;
          font-size: 14px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 16px;
          background: #fafbfc;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          transform: translateY(-1px);
        }

        .form-input.readonly {
          background: #f8f9fa;
          color: #6c757d;
          cursor: not-allowed;
        }

        .form-textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-actions {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
          margin-top: 30px;
          padding-top: 25px;
          border-top: 2px solid #f1f3f4;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .modal-container {
            width: 95%;
            margin: 20px;
          }

          .booking-details-form {
            padding: 20px;
          }

          .modal-header {
            padding: 20px 25px;
          }

          .form-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Loading states and micro-interactions */
        .form-input:valid {
          border-color: #28a745;
        }

        .form-input:invalid:not(:placeholder-shown) {
          border-color: #dc3545;
        }
      `}</style>
    </>
  );
};

export default BookingForm;
