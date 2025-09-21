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
const isAdmin = () => {
  const user = getUser();
  // Nếu có user và role là 'admin' thì trả về true
  return user && user.role === "admin";
};

const authService = {
  getToken,
  getUser,
  isAdmin,
};

export default authService;
