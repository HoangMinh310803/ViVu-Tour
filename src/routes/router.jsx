// src/routes/index.js (ví dụ)
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminDashboard from "../components/admin/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TourSearchPage from "../components/TourSearchPage";

import TourDetailPage from "../pages/TourDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    path: "/toursearch",
    element: <TourSearchPage />,
  },

  {
    path: "/tour/:id",
    element: <TourDetailPage />,
  },
  // Thêm các route khác
]);

export default router;
