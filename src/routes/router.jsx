// src/routes/index.js (ví dụ)
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AdminDashboard from "../components/admin/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TourDetailPage from "../pages/TourDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  {
    path: "/tour/:id",
    element: <TourDetailPage />,
  }
  // Thêm các route khác
]);

export default router;
