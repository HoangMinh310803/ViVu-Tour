// src/routes/index.js (ví dụ)
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminDashboard from "../components/admin/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TourDetail from "../pages/TourDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tour/:id",
    element: <TourDetail />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  // Thêm các route khác
]);

export default router;
