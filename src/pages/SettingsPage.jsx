// src/pages/SettingsPage.js
import React, { useState } from "react";
import { styles } from "../styles";

const SettingsPage = () => {
  const [settingsTab, setSettingsTab] = useState("general");

  return (
    <div>
      <div style={styles.settingsTabsContainer}>
        <button
          style={{
            ...styles.settingsTab,
            ...(settingsTab === "general" ? styles.settingsTabActive : {}),
          }}
          onClick={() => setSettingsTab("general")}
        >
          Chung
        </button>
        <button
          style={{
            ...styles.settingsTab,
            ...(settingsTab === "account" ? styles.settingsTabActive : {}),
          }}
          onClick={() => setSettingsTab("account")}
        >
          Tài khoản
        </button>
        <button
          style={{
            ...styles.settingsTab,
            ...(settingsTab === "notifications"
              ? styles.settingsTabActive
              : {}),
          }}
          onClick={() => setSettingsTab("notifications")}
        >
          Thông báo
        </button>
      </div>

      {settingsTab === "general" && (
        <div style={styles.settingsCard}>
          <div style={styles.settingsHeader}>
            <h3 style={styles.settingsTitle}>Thông tin chung</h3>
          </div>
          <div style={styles.settingsContent}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Tên công ty</label>
              <input
                type="text"
                style={styles.formInput}
                defaultValue="TourAdmin Company"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email liên hệ</label>
              <input
                type="email"
                style={styles.formInput}
                defaultValue="contact@tourcompany.com"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Số điện thoại</label>
              <input
                type="tel"
                style={styles.formInput}
                defaultValue="0123 456 789"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Địa chỉ</label>
              <textarea rows="3" style={styles.formTextarea}>
                123 Đường ABC, Phường X, Quận Y, TP. Z
              </textarea>
            </div>
          </div>
        </div>
      )}

      {settingsTab === "account" && (
        <div style={styles.settingsCard}>
          <div style={styles.settingsHeader}>
            <h3 style={styles.settingsTitle}>Tài khoản quản trị</h3>
          </div>
          <div style={styles.settingsContent}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Tên hiển thị</label>
              <input
                type="text"
                style={styles.formInput}
                defaultValue="Admin User"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email</label>
              <input
                type="email"
                style={styles.formInput}
                defaultValue="admin@tourcompany.com"
                readOnly
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Mật khẩu cũ</label>
              <input type="password" style={styles.formInput} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Mật khẩu mới</label>
              <input type="password" style={styles.formInput} />
            </div>
          </div>
        </div>
      )}

      {settingsTab === "notifications" && (
        <div style={styles.settingsCard}>
          <div style={styles.settingsHeader}>
            <h3 style={styles.settingsTitle}>Cài đặt thông báo</h3>
          </div>
          <div style={styles.settingsContent}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <input
                type="checkbox"
                id="email-booking"
                defaultChecked
                style={{ marginRight: "10px" }}
              />
              <label htmlFor="email-booking">
                Gửi email khi có tour mới được đặt.
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <input
                type="checkbox"
                id="email-cancel"
                defaultChecked
                style={{ marginRight: "10px" }}
              />
              <label htmlFor="email-cancel">
                Gửi email khi có tour bị hủy.
              </label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <input
                type="checkbox"
                id="weekly-summary"
                style={{ marginRight: "10px" }}
              />
              <label htmlFor="weekly-summary">
                Gửi báo cáo thống kê hàng tuần.
              </label>
            </div>
          </div>
        </div>
      )}

      <div style={styles.settingsFooter}>
        <button style={styles.primaryButton}>Lưu thay đổi</button>
      </div>
    </div>
  );
};
export default SettingsPage;
