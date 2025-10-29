import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // Lấy fullName hoặc username từ payload
        setUser({
          name: decoded.unique_name,
        });
        console.log("Decoded JWT:", decoded);
      } catch (err) {
        console.error("Invalid token:", err);
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <header className="bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo + Tên */}
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-2">
              <div
                className="d-flex align-items-center justify-content-center bg-teal rounded-circle"
                style={{ width: "32px", height: "32px" }}
              ></div>
            </div>
            <span
              className="fs-4 fw-semibold text-dark"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              ViVu Tour
            </span>
          </div>

          {/* Navbar */}
          <nav className="d-none d-md-flex gap-4">
            <Link
              to="/toursearch"
              className="text-decoration-none text-dark link-hover"
            >
              Tìm Tour
            </Link>
            <a href="#" className="text-decoration-none text-dark link-hover">
              Tìm vé máy bay
            </a>
            <a href="#" className="text-decoration-none text-dark link-hover">
              Tìm khách sạn
            </a>
            <a href="#" className="text-decoration-none text-dark link-hover">
              Doanh nghiệp
            </a>
            <a href="#" className="text-decoration-none text-dark link-hover">
              Blog
            </a>
          </nav>

          {/* Hotline + Button */}
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center text-secondary small">
              <Phone size={16} className="me-1" />
              <span>Hotline: 0904895575</span>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=61580859876418"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm text-white px-3 py-2 text-decoration-none"
              style={{ backgroundColor: "#14b8a6" }}
            >
              Liên hệ ViVu Tour
            </a>

            {/* Login / Hello user */}
            {user ? (
              <div className="d-flex align-items-center gap-2">
                <span className="text-dark fw-semibold">
                  Hello, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-secondary btn-sm"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-outline-primary btn-sm px-3 py-2"
              >
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
