import React from "react";
import { Activity } from "lucide-react";

const SidebarAdmin = ({
  sidebarOpen,
  setActiveTab,
  activeTab,
  menuItems,
  styles,
}) => {
  return (
    <div style={styles.sidebar}>
      {/* Logo + Tên */}
      <div style={styles.sidebarHeader}>
        <div style={styles.logo}>
          <Activity size={20} color="white" />
        </div>
        {sidebarOpen && <span style={styles.logoText}>TourAdmin</span>}
      </div>

      {/* Menu */}
      <nav style={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                ...styles.navItem,
                ...(activeTab === item.id ? styles.navItemActive : {}),
              }}
              onMouseEnter={(e) => {
                if (activeTab !== item.id) {
                  Object.assign(e.target.style, styles.navItemHover);
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== item.id) {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#6b7280";
                }
              }}
            >
              <Icon size={20} />
              {sidebarOpen && (
                <span style={styles.navItemText}>{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SidebarAdmin;
