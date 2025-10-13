import React, { useState } from "react";

// Layout Components
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";

// !!! BỎ IMPORT AddTourModal ĐI !!!
// import AddTourModal from "../common/AddTourModal";

// Pages
import DashboardView from "../../pages/DashboardView";
import BookingsPage from "../../pages/BookingsPage";
import ToursPage from "../../pages/ToursPage";
import CustomersPage from "../../pages/CustomersPage";
// import AnalyticsPage from "../../pages/AnalyticsPage";
import SettingsPage from "../../pages/SettingsPage";

// Data and Styles
import { menuItems } from "../../data";
import { styles } from "../../styles";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  // !!! BỎ STATE QUẢN LÝ MODAL Ở ĐÂY !!!
  // const [isAddTourModalOpen, setIsAddTourModalOpen] = useState(false);

  const [resetToken, setResetToken] = useState(0);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setResetToken((prev) => prev + 1);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView setActiveTab={setActiveTab} />;
      case "bookings":
        return <BookingsPage resetToken={resetToken} />;
      case "tours":
        // !!! BỎ PROP onAddTourClick VÌ ToursPage TỰ XỬ LÝ !!!
        return <ToursPage resetToken={resetToken} />;
      case "customers":
        return <CustomersPage resetToken={resetToken} />;
      // case "analytics":
      //   return <AnalyticsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div style={styles.container}>
      {/* !!! BỎ PHẦN RENDER MODAL Ở ĐÂY !!! */}
      {/* {isAddTourModalOpen && (
        <AddTourModal onClose={() => setIsAddTourModalOpen(false)} />
      )} */}

      <Sidebar
        isOpen={sidebarOpen}
        menuItems={menuItems}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />

      <div style={styles.mainContent}>
        <Header
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          activeTabLabel={
            menuItems.find((item) => item.id === activeTab)?.label
          }
        />
        <main style={styles.content}>{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
