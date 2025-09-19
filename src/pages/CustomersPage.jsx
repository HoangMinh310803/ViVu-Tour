import React, { useState, useEffect } from "react";
import apiClient from "../apiConfig";
import PaginatedTable from "../components/common/PaginatedTable";
import CustomerFormModal from "../components/common/CustomerFormModal";
import CustomerDetailModal from "../components/common/CustomerDetailModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";
import { Eye, Edit, Trash2 } from "lucide-react";
import { styles } from "../styles";
import {
  getCustomerStatusStyle,
  getCustomerStatusText,
  getInitials,
} from "../utils";

const CustomersPage = ({ resetToken }) => {
  const [customersList, setCustomersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/api/User/GetAll");

      let data = response.data;
      if (typeof data === "string") {
        data = JSON.parse(data);
      }

      if (Array.isArray(data)) {
        setCustomersList(data);
      } else {
        throw new Error("Dữ liệu API trả về không phải là một mảng");
      }
      setError(null);
    } catch (err) {
      setError("Không thể tải dữ liệu khách hàng.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const closeModals = () => {
    setIsFormModalOpen(false);
    setIsViewModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedCustomer(null);
  };

  const handleSaveCustomer = async (customerData) => {
    try {
      if (customerData.userId) {
        // Sử dụng userId để kiểm tra
        await apiClient.put(`/api/User/${customerData.userId}`, customerData);
      } else {
        await apiClient.post("/api/User", customerData);
      }
      console.log(customerData);
      closeModals();
      await fetchCustomers();
    } catch (err) {
      alert("Lưu thông tin khách hàng thất bại!");
      console.error(err);
    }
  };

  const handleConfirmDelete = async () => {
    if (!selectedCustomer) return;
    try {
      await apiClient.delete(`/api/User/${selectedCustomer.userId}`);
      closeModals();
      await fetchCustomers();
    } catch (err) {
      alert("Xóa khách hàng thất bại!");
      console.error(err);
    }
  };

  const handleAddClick = () => {
    setSelectedCustomer(null);
    setIsFormModalOpen(true);
  };

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setIsFormModalOpen(true);
  };

  const handleViewClick = (customer) => {
    setSelectedCustomer(customer);
    setIsViewModalOpen(true);
  };

  const handleDeleteClick = (customer) => {
    setSelectedCustomer(customer);
    setIsDeleteModalOpen(true);
  };

  const columns = [
    {
      key: "fullName", // Sửa: name -> fullName
      header: "Tên Khách hàng",
      width: "25%",
      render: (item) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={styles.customerAvatar}>{getInitials(item.fullName)}</div>
          <span style={{ fontWeight: "500", color: "#1f2937" }}>
            {item.fullName}
          </span>
        </div>
      ),
    },
    { key: "email", header: "Email", width: "25%" },
    { key: "phone", header: "Số điện thoại", width: "15%" },
    { key: "createdDate", header: "Ngày tham gia", width: "15%" }, // Sửa: joinDate -> createdDate
    {
      key: "isActive", // Sửa: status -> isActive
      header: "Trạng thái",
      width: "10%",
      render: (item) => (
        <span style={getCustomerStatusStyle(item.isActive, styles)}>
          {getCustomerStatusText(item.isActive)}
        </span>
      ),
    },
  ];

  const renderActions = (customer) => (
    <>
      <button
        title="Xem chi tiết"
        onClick={() => handleViewClick(customer)}
        style={{ ...styles.actionBtn, color: "#14B8A6" }}
      >
        <Eye size={16} />
      </button>
      <button
        title="Cập nhật"
        onClick={() => handleEditClick(customer)}
        style={{ ...styles.actionBtn, color: "#3b82f6" }}
      >
        <Edit size={16} />
      </button>
      <button
        title="Xóa"
        onClick={() => handleDeleteClick(customer)}
        style={{ ...styles.actionBtn, color: "#ef4444" }}
      >
        <Trash2 size={16} />
      </button>
    </>
  );

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Đang tải danh sách khách hàng...
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
        {error}
      </div>
    );

  return (
    <>
      <PaginatedTable
        title="Danh sách Khách hàng"
        columns={columns}
        data={customersList}
        buttonLabel="Thêm Khách hàng"
        onButtonClick={handleAddClick}
        renderRowActions={renderActions}
        resetToken={resetToken}
      />
      <CustomerFormModal
        isOpen={isFormModalOpen}
        onClose={closeModals}
        onSave={handleSaveCustomer}
        initialData={selectedCustomer}
      />
      <CustomerDetailModal
        isOpen={isViewModalOpen}
        customer={selectedCustomer}
        onClose={closeModals}
      />
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeModals}
        onConfirm={handleConfirmDelete}
        itemName={selectedCustomer?.fullName} // Sửa: name -> fullName
      />
    </>
  );
};

export default CustomersPage;
