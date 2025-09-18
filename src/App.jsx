import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdminDashboard from "./components/admin/AdminDashboard";
import BookTour from "./components/admin/BookTour";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AdminDashboard />
      {/* <BookTour /> */}
    </>
  );
}

export default App;
