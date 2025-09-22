import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { User, Lock, Compass } from "lucide-react";
import apiClient from "../apiConfig";

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
      // 1. Gọi API login để lấy token
      const loginResponse = await apiClient.post("/api/Authorize/login", {
        username,
        password,
      });

      const token = loginResponse.data.token;

      // 2. Lưu token vào localStorage
      localStorage.setItem("token", token);
      console.log("Login success, token received.");

      // 3. Dùng token để gọi API /me lấy thông tin user
      // SỬA LỖI Ở ĐÂY: Dùng đúng apiClient.get và endpoint "/api/Authorize/me"
      const meResponse = await apiClient.get("/api/Authorize/me");
      const currentUser = meResponse.data;
      console.log("Current user info:", currentUser);

      // 4. KIỂM TRA ROLE VÀ ĐIỀU HƯỚNG
      if (currentUser && currentUser.role === "Admin") {
        // Nếu là Admin, chuyển hướng đến trang admin
        // Sửa lại path cho đúng với router của bạn, ví dụ: "/admin-dashboard"
        navigate("/admin");
      } else {
        // Nếu không, chuyển hướng đến trang chủ
        navigate("/");
      }

      setError(""); // Xóa thông báo lỗi nếu đăng nhập thành công
    } catch (err) {
      console.error("Login error:", err);
      localStorage.removeItem("token");
      setError("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  };

  const handleLogout = async () => {
    try {
      await apiClient.post("/api/Authorize/logout");
      localStorage.removeItem("token");
      alert("Đã đăng xuất!");
      navigate("/login"); // Chuyển về trang đăng nhập sau khi logout
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <div style={styles.loginHeader}>
          <div style={styles.logo2}>
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
              ...styles.primaryButton2,
              width: "100%",
              justifyContent: "center",
            }}
          >
            Đăng nhập
          </button>
        </form>

        <p style={styles.registerLinkContainer}>
          Chưa có tài khoản?{" "}
          <Link to="/register" style={styles.registerLink}>
            Đăng ký
          </Link>
        </p>

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
