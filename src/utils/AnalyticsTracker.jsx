import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-RFCL5YKGVJ", {
        page_path: location.pathname + location.search,
      });
      console.log("📊 GA page_view:", location.pathname);
    }
  }, [location]);

  return null;
}


export default AnalyticsTracker;
