// src/components/layout/Sidebar.js
import React from "react";
import { Ship } from "lucide-react";
import { styles } from "../../styles";

const Sidebar = ({ isOpen, menuItems, activeTab, onTabClick }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = styles.navItemHover.backgroundColor;
    e.currentTarget.style.color = styles.navItemHover.color;
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#6b7280";
  };

  return (
    <div style={{ ...styles.sidebar, width: isOpen ? "256px" : "64px" }}>
      <div style={styles.sidebarHeader}>
        <div style={styles.logo}>
          <Ship size={20} color="white" />
        </div>
        {isOpen && <span style={styles.logoText}>TourAdmin</span>}
      </div>
      <nav style={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabClick(item.id)}
              style={{
                ...styles.navItem,
                ...(isActive ? styles.navItemActive : {}),
              }}
              onMouseEnter={(e) => !isActive && handleMouseEnter(e)}
              onMouseLeave={(e) => !isActive && handleMouseLeave(e)}
            >
              <Icon size={20} />
              <span
                style={{
                  ...styles.navItemText,
                  display: isOpen ? "block" : "none",
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
export default Sidebar;
