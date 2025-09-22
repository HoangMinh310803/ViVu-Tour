// src/routes/index.js
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import AdminDashboard from "../components/admin/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TourDetailPage from "../pages/TourDetailPage";
import AdminRoute from "../components/admin/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/tour/:id",
    element: <TourDetailPage />,
  },
  // Thêm các route khác ở đây
]);

export default router;
