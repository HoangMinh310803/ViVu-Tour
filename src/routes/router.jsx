// src/routes/index.js (ví dụ)
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // Thêm các route khác
]);

export default router;
