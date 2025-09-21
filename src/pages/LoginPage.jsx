import React, { useState } from "react";
import { Link } from "react-router-dom"; // 1. Import Link từ react-router-dom
import { styles } from "../styles";
import { User, Lock, Compass } from "lucide-react";
import apiClient from "../apiConfig";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Vui lòng nhập tên đăng nhập và mật khẩu.");
      return;
    }

    try {
      const response = await apiClient.post("/api/Authorize/login", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token); // lưu token
      if (token) {
        apiClient
          .get("/api/Authorize/me")
          .then((res) => setUser(res.data))
          .catch(() => setUser(null));
      }
      console.log("Login success:", response.data);

      alert("Đăng nhập thành công!");
      navigate("/"); // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
      setError("");
    } catch (err) {
      console.error("Login error:", err);
      setError("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  };
  const handleLogout = async () => {
    try {
      await apiClient.post("/api/Authorize/logout"); // gọi logout API
      alert("Đã đăng xuất!");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <div style={styles.loginHeader}>
          <div style={styles.logo}>
            <Compass size={20} color="white" />
          </div>
          <h1 style={styles.loginTitle}>Vivu Tour</h1>
        </div>

        <p style={styles.loginSubtitle}>
          Đăng nhập vào tài khoản của bạn để tiếp tục
        </p>

        {error && <p style={styles.loginError}>{error}</p>}

        <form onSubmit={handleLogin} style={styles.loginForm}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.formLabel}>
              Tên đăng nhập
            </label>
            <div style={{ position: "relative" }}>
              <User size={16} style={styles.loginInputIcon} />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ ...styles.formInput, paddingLeft: "40px" }}
                placeholder="Nhập tên đăng nhập"
              />
            </div>
          </div>
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
          <div style={styles.loginActions}>
            <label style={styles.loginCheckboxLabel}>
              <input type="checkbox" style={styles.loginCheckbox} />
              Ghi nhớ tôi
            </label>
            <a href="#" style={styles.loginForgotPassword}>
              Quên mật khẩu?
            </a>
          </div>
          <button
            type="submit"
            style={{
              ...styles.primaryButton,
              width: "100%",
              justifyContent: "center",
            }}
          >
            Đăng nhập
          </button>
        </form>

        {/* 2. Thêm liên kết đến trang đăng ký */}
        <p style={styles.registerLinkContainer}>
          Chưa có tài khoản?{" "}
          <Link to="/register" style={styles.registerLink}>
            Đăng ký
          </Link>
        </p>
        {/* Nút Logout để test */}
        <button
          onClick={handleLogout}
          style={{
            ...styles.secondaryButton,
            width: "100%",
            marginTop: "10px",
            justifyContent: "center",
          }}
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
