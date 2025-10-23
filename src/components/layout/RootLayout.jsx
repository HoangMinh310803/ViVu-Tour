// src/layouts/RootLayout.jsx
import { Outlet } from "react-router-dom";
import AnalyticsTracker from "../../utils/AnalyticsTracker";

function RootLayout() {
  return (
    <>
      <AnalyticsTracker /> 
      <Outlet /> 
    </>
  );
}

export default RootLayout;
