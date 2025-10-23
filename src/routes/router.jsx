// src/routes/index.js
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminDashboard from "../components/admin/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TourSearchPage from "../pages/TourSearchPage";
import TourDetailPage from "../pages/TourDetailPage";
import AdminRoute from "../components/admin/AdminRoute";
import RootLayout from "../components/layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // 👈 Bọc toàn bộ route con trong RootLayout
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "toursearch", element: <TourSearchPage /> },
      { path: "tour/:id", element: <TourDetailPage /> },

      {
        element: <AdminRoute />, // ✅ vẫn giữ admin wrapper
        children: [{ path: "admin", element: <AdminDashboard /> }],
      },
    ],
  },
]);

export default router;
