// src/components/layout/Header.js
import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import { styles } from "../../styles";

const Header = ({ onToggleSidebar, activeTabLabel }) => {
  return (
    <header style={styles.header}>
      <div style={styles.headerLeft}>
        <button
          onClick={onToggleSidebar}
          style={{ ...styles.notificationBtn, marginRight: "8px" }}
        >
          <Menu size={24} />
        </button>
        <h1 style={styles.headerTitle}>{activeTabLabel || "Dashboard"}</h1>
      </div>
      <div style={styles.headerRight}>
        <div style={styles.searchContainer}>
          <Search size={20} style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            style={styles.searchInput}
          />
        </div>
        <button style={styles.notificationBtn}>
          <Bell size={24} />
          <span style={styles.notificationBadge}>3</span>
        </button>
        <div style={styles.userProfile}>
          <div style={styles.userAvatar}>AD</div>
          <div style={styles.userInfo}>
            <p style={styles.userName}>Admin User</p>
            <p style={styles.userEmail}>admin@tourcompany.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
