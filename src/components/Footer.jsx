import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Du thuyền Hạ Long", href: "/cruises" },
    { name: "Tour Sapa", href: "/sapa-tours" },
    { name: "Tour Ninh Bình", href: "/ninh-binh" },
  ];

  const support = [
    { name: "Liên hệ", href: "/contact" },
    { name: "Chính sách hoàn hủy", href: "/cancellation" },
    { name: "Điều khoản sử dụng", href: "/terms" },
  ];

  const styles = {
    footerMain: {
      background:
        "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      color: "white",
    },
    footerBottom: {
      backgroundColor: "#0a0a1a",
      borderTop: "1px solid #333",
    },
    companyLogo: {
      width: "48px",
      height: "48px",
      background: "linear-gradient(135deg, #20c997, #17a2b8)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    footerLink: {
      color: "#adb5bd",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
    },
    socialIcon: {
      width: "40px",
      height: "40px",
      backgroundColor: "#495057",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      textDecoration: "none",
      color: "white",
    },
    destinationTag: {
      display: "inline-block",
      padding: "8px 16px",
      backgroundColor: "#495057",
      borderRadius: "20px",
      color: "#adb5bd",
      fontSize: "14px",
      margin: "4px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "none",
      textDecoration: "none",
    },
    newsletterInput: {
      backgroundColor: "#495057",
      border: "1px solid #6c757d",
      color: "white",
    },
    newsletterButton: {
      backgroundColor: "#20c997",
      borderColor: "#20c997",
    },
    iconText: {
      fontSize: "14px",
    },
    contactIcon: {
      color: "#20c997",
      fontSize: "14px",
    },
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup");
  };

  return (
    <footer style={styles.footerMain}>
      {/* Main Footer Content */}
      <div className="container py-4">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div style={styles.companyLogo} className="me-3">
                <span className="text-white fw-bold fs-5">V</span>
              </div>
              <div>
                <h3 className="fs-4 fw-bold text-white mb-0">ViVu Tour</h3>
                <small className="text-info">Du lịch Việt Nam</small>
              </div>
            </div>

            <p className="small lh-base mb-0" style={{ color: "#adb5bd" }}>
              Nền tảng đặt tour du lịch hàng đầu Việt Nam, chuyên tổ chức các
              chuyến du thuyền Hạ Long và tour khám phá miền Bắc.
            </p>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3 text-white">Dịch vụ</h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={service.href}
                    style={styles.footerLink}
                    onMouseEnter={(e) => (e.target.style.color = "#20c997")}
                    onMouseLeave={(e) => (e.target.style.color = "#adb5bd")}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3 text-white">Hỗ trợ</h5>
            <ul className="list-unstyled">
              {support.map((item, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={item.href}
                    style={styles.footerLink}
                    onMouseEnter={(e) => (e.target.style.color = "#20c997")}
                    onMouseLeave={(e) => (e.target.style.color = "#adb5bd")}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3 text-white">Liên hệ</h5>

            <div className="d-flex align-items-center mb-2">
              <FaPhone style={styles.contactIcon} className="me-2" />
              <small style={{ color: "#adb5bd" }}>0904895575</small>
            </div>

            <div className="d-flex align-items-center mb-2">
              <FaEnvelope style={styles.contactIcon} className="me-2" />
              <small style={{ color: "#adb5bd" }}>vivutour@gmail.com</small>
            </div>

            <div className="d-flex align-items-start mb-3">
              <FaMapMarkerAlt
                style={styles.contactIcon}
                className="me-2 mt-1"
              />
              <small style={{ color: "#adb5bd" }}>Đại học FPT Hà Nội</small>
            </div>

            {/* Social Media */}
            <div className="mt-3">
              <p
                className="text-white fw-medium mb-2"
                style={{ fontSize: "14px" }}
              >
                Theo dõi chúng tôi
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61580859876418"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#1877f2";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#495057";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="#"
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#495057";
                    e.target.style.background = "#495057";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#000";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#495057";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <FaTiktok size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={styles.footerBottom}>
        <div className="container py-3">
          <div className="text-center">
            <p className="mb-0 small" style={{ color: "#adb5bd" }}>
              © {currentYear} ViVu Tour. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
