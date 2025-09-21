// src/utils.js

export const getInitials = (name) => {
  if (!name) return "";
  const names = name.split(" ");
  if (names.length > 1) {
    return `${names[0][0]}${names[names.length - 1][0]}`;
  }
  return name.substring(0, 2);
};

export const getStatusStyle = (status, styles) => {
  const baseStyle = styles.statusBadge;
  switch (status) {
    case "Confirmed":
      return { ...baseStyle, backgroundColor: "#dcfce7", color: "#166534" };
    case "Pending":
      return { ...baseStyle, backgroundColor: "#fef3c7", color: "#92400e" };
    case "Cancelled":
      return { ...baseStyle, backgroundColor: "#fee2e2", color: "#991b1b" };
    default:
      return baseStyle;
  }
};

export const getStatusText = (status) => {
  switch (status) {
    case "confirmed":
      return "Đã xác nhận";
    case "pending":
      return "Chờ xử lý";
    case "cancelled":
      return "Đã hủy";
    default:
      return status;
  }
};

export const getTourStatusStyle = (status, styles) => {
  const baseStyle = styles.statusBadge;
  switch (status) {
    case "Active":
      return { ...baseStyle, backgroundColor: "#dcfce7", color: "#166534" };
    case "Inactive":
      return { ...baseStyle, backgroundColor: "#fee2e2", color: "#991b1b" };
    default:
      return baseStyle;
  }
};

export const getTourStatusText = (status) => {
  switch (status) {
    case "Active":
      return "Đang hoạt động";
    case "Inactive":
      return "Tạm dừng";
    default:
      return status;
  }
};

export const getCustomerStatusStyle = (isActive, styles) => {
  const baseStyle = styles.statusBadge;
  if (isActive) {
    return { ...baseStyle, backgroundColor: "#dcfce7", color: "#166534" };
  } else {
    return { ...baseStyle, backgroundColor: "#fee2e2", color: "#991b1b" };
  }
};

export const getCustomerStatusText = (isActive) => {
  return isActive ? "Hoạt động" : "Không hoạt động";
};
