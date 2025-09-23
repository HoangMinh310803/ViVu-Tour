// src/routes/index.js
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminDashboard from "../components/admin/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TourSearchPage from "../pages/TourSearchPage";

import TourDetailPage from "../pages/TourDetailPage";
import AdminRoute from "../components/admin/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    element: <AdminRoute />, // wrapper để check quyền admin
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
    ],
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
  // Thêm các route khác ở đây
]);

export default router;
