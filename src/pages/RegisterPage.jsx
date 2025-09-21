// src/components/RegisterPage.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles"; 
import { User, Lock, Compass, Mail } from "lucide-react";
import apiClient from "../apiConfig"; // axios instance

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation cơ bản
    if (!username || !fullName || !email || !password || !confirmPassword) {
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

    try {
      // Gọi API backend
      const response = await apiClient.post("/api/Authorize/register", {
        username,
        fullName,
        email,
        password,
      });

      // Nếu API trả về token ngay sau khi đăng ký
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Đăng ký và đăng nhập thành công!");
        navigate("/");
      } else {
        // Nếu chỉ trả về thông báo thành công
        alert("Đăng ký thành công, vui lòng đăng nhập!");
        navigate("/login");
      }

      setError("");
    } catch (err) {
      console.error("Register error:", err);
      setError("Đăng ký thất bại. Vui lòng thử lại.");
    }
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

        <p style={styles.loginSubtitle}>Bắt đầu hành trình của bạn với chúng tôi</p>

        {error && <p style={styles.loginError}>{error}</p>}

        <form onSubmit={handleRegister} style={styles.loginForm}>
          {/* Họ và tên */}
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

          {/* Email */}
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

          {/* Username */}
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.formLabel}>
              Username
            </label>
            <div style={{ position: "relative" }}>
              <User size={16} style={styles.loginInputIcon} />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ ...styles.formInput, paddingLeft: "40px" }}
                placeholder="Nhập username của bạn"
              />
            </div>
          </div>

          {/* Mật khẩu */}
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

          {/* Xác nhận mật khẩu */}
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
              marginTop: "16px",
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
