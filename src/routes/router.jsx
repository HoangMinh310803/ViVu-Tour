// src/routes/index.js (ví dụ)
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AdminDashboard from "../components/admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },

  // Thêm các route khác
]);

export default router;
