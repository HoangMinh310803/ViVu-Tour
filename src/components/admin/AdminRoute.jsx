import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../../authService";

const AdminRoute = () => {
  const isUserAdmin = authService.isAdmin();

  // Nếu là admin, cho phép truy cập vào các route con (sử dụng Outlet)
  // Nếu không, điều hướng về trang đăng nhập
  return isUserAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
