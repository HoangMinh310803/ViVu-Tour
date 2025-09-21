// src/components/RegisterPage.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles"; // Sử dụng lại file styles chung
import { User, Lock, Compass, Mail } from "lucide-react"; // Thêm icon Mail

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }

    setError("");
    // TODO: Thêm logic gọi API đăng ký ở đây
    console.log("Đăng ký với:", { fullName, email, password });
    alert(`Đăng ký thành công với Email: ${email}`);
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <div style={styles.loginHeader}>
          <div style={styles.logo}>
            <Compass size={20} color="white" />
          </div>
          <h1 style={styles.loginTitle}>Tạo tài khoản Vivu Tour</h1>
        </div>

        <p style={styles.loginSubtitle}>
          Bắt đầu hành trình của bạn với chúng tôi
        </p>

        {error && <p style={styles.loginError}>{error}</p>}

        <form onSubmit={handleRegister} style={styles.loginForm}>
          {/* Form Group: Họ và tên */}
          <div style={styles.formGroup}>
            <label htmlFor="fullName" style={styles.formLabel}>
              Họ và tên
            </label>
            <div style={{ position: "relative" }}>
              <User size={16} style={styles.loginInputIcon} />
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ ...styles.formInput, paddingLeft: "40px" }}
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
          </div>

          {/* Form Group: Email */}
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.formLabel}>
              Email
            </label>
            <div style={{ position: "relative" }}>
              <Mail size={16} style={styles.loginInputIcon} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ ...styles.formInput, paddingLeft: "40px" }}
                placeholder="Nhập email"
              />
            </div>
          </div>

          {/* Form Group: Mật khẩu */}
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.formLabel}>
              Mật khẩu
            </label>
            <div style={{ position: "relative" }}>
              <Lock size={16} style={styles.loginInputIcon} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...styles.formInput, paddingLeft: "40px" }}
                placeholder="Nhập mật khẩu"
              />
            </div>
          </div>

          {/* Form Group: Xác nhận mật khẩu */}
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.formLabel}>
              Xác nhận mật khẩu
            </label>
            <div style={{ position: "relative" }}>
              <Lock size={16} style={styles.loginInputIcon} />
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ ...styles.formInput, paddingLeft: "40px" }}
                placeholder="Nhập lại mật khẩu"
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              ...styles.primaryButton,
              width: "100%",
              justifyContent: "center",
              marginTop: "16px", // Thêm khoảng cách
            }}
          >
            Đăng ký
          </button>
        </form>

        <p style={styles.registerLinkContainer}>
          Đã có tài khoản?{" "}
          <Link to="/login" style={styles.registerLink}>
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
