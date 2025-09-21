import { jwtDecode } from "jwt-decode";

// Hàm lấy token từ localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Hàm lấy thông tin người dùng từ token đã giải mã
const getUser = () => {
  const token = getToken();
  if (!token) return null;

  try {
    // Giải mã token
    const decodedUser = jwtDecode(token);

    // Kiểm tra token đã hết hạn chưa
    if (decodedUser.exp * 1000 < Date.now()) {
      localStorage.removeItem("token"); // Xóa token hết hạn
      return null;
    }

    return decodedUser;
  } catch (error) {
    console.error("Lỗi giải mã token:", error);
    return null;
  }
};

// Hàm kiểm tra người dùng có phải là admin không
// HÀM ĐÃ SỬA LẠI CHÍNH XÁC
const isAdmin = () => {
  const user = getUser();
  if (!user) return false;

  // 1. Lấy role claim theo đúng tên key từ .NET
  // Dùng ngoặc vuông [] vì tên key có ký tự đặc biệt
  const roleClaim =
    user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  // 2. So sánh sau khi đã chuyển về chữ thường để chắc chắn
  return roleClaim && roleClaim.toLowerCase() === "admin";
};

const authService = {
  getToken,
  getUser,
  isAdmin,
};

export default authService;
