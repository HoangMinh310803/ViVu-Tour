import React from "react";
import { Menu, Bell, Search } from "lucide-react";

const Header = ({ sidebarOpen, setSidebarOpen, activeTab, menuItems }) => {
  const styles = {
    header: {
      backgroundColor: "white",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    headerTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#1f2937",
    },
    headerRight: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    searchContainer: {
      position: "relative",
    },
    searchInput: {
      paddingLeft: "40px",
      paddingRight: "16px",
      paddingTop: "8px",
      paddingBottom: "8px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      outline: "none",
      width: "200px",
    },
    searchIcon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af",
    },
    notificationBtn: {
      position: "relative",
      padding: "8px",
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      borderRadius: "6px",
      color: "#6b7280",
    },
    notificationBadge: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      backgroundColor: "#ef4444",
      color: "white",
      fontSize: "10px",
      borderRadius: "50%",
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    userProfile: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    userAvatar: {
      width: "32px",
      height: "32px",
      backgroundColor: "#14B8A6",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "14px",
      fontWeight: "500",
    },
    userName: {
      fontWeight: "500",
      color: "#1f2937",
      fontSize: "14px",
      margin: 0,
    },
    userEmail: {
      color: "#6b7280",
      fontSize: "12px",
      margin: 0,
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.headerLeft}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ ...styles.notificationBtn, marginRight: "8px" }}
        >
          <Menu size={24} />
        </button>
        <h1 style={styles.headerTitle}>
          {menuItems.find((item) => item.id === activeTab)?.label ||
            "Dashboard"}
        </h1>
      </div>

      <div style={styles.headerRight}>
        {/* Search */}
        <div style={styles.searchContainer}>
          <Search size={20} style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            style={styles.searchInput}
          />
        </div>

        {/* Notifications */}
        <button style={styles.notificationBtn}>
          <Bell size={24} />
          <span style={styles.notificationBadge}>3</span>
        </button>

        {/* User Profile */}
        <div style={styles.userProfile}>
          <div style={styles.userAvatar}>AD</div>
          <div>
            <p style={styles.userName}>Admin User</p>
            <p style={styles.userEmail}>admin@tourcompany.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
