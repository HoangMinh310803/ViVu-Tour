// src/App.jsx
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    const unlisten = router.subscribe((state) => {
      // Mỗi khi route thay đổi, gửi event cho GA
      if (window.gtag) {
        window.gtag("config", "G-RFCL5YKGVJ", {
          page_path: state.location.pathname + state.location.search,
        });
      }
    });

    return () => unlisten(); // cleanup khi component unmount
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
