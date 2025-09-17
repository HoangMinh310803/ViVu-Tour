// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
