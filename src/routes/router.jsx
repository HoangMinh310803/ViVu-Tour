// src/routes/index.js (ví dụ)
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // Thêm các route khác
]);

export default router;
