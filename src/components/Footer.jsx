import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaStar, FaAward } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "Du thuyền Hạ Long", href: "/cruises" },
    { name: "Tour Sapa", href: "/sapa-tours" },
    { name: "Tour Ninh Bình", href: "/ninh-binh" },
    { name: "Khách sạn", href: "/hotels" },
    { name: "Vé máy bay", href: "/flights" },
    { name: "Tour trọn gói", href: "/packages" }
  ];

  const support = [
    { name: "Liên hệ", href: "/contact" },
    { name: "Câu hỏi thường gặp", href: "/faq" },
    { name: "Hướng dẫn đặt tour", href: "/booking-guide" },
    { name: "Chính sách hoàn hủy", href: "/cancellation" },
    { name: "Điều khoản sử dụng", href: "/terms" },
    { name: "Bảo mật thông tin", href: "/privacy" }
  ];

  const destinations = [
    "Vịnh Hạ Long",
    "Vịnh Lan Hạ", 
    "Đảo Cát Bà",
    "Sapa",
    "Ninh Bình",
    "Hà Giang"
  ];

  const styles = {
    footerMain: {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white'
    },
    footerBottom: {
      backgroundColor: '#0a0a1a',
      borderTop: '1px solid #333'
    },
    companyLogo: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #20c997, #17a2b8)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    footerLink: {
      color: '#adb5bd',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease'
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#495057',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      color: 'white'
    },
    destinationTag: {
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: '#495057',
      borderRadius: '20px',
      color: '#adb5bd',
      fontSize: '14px',
      margin: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: 'none',
      textDecoration: 'none'
    },
    newsletterInput: {
      backgroundColor: '#495057',
      border: '1px solid #6c757d',
      color: 'white'
    },
    newsletterButton: {
      backgroundColor: '#20c997',
      borderColor: '#20c997'
    },
    iconText: {
      fontSize: '14px'
    },
    contactIcon: {
      color: '#20c997',
      fontSize: '14px'
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup');
  };

  return (
    <footer style={styles.footerMain}>
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div style={styles.companyLogo} className="me-3">
                <span className="text-white fw-bold fs-5">V</span>
              </div>
              <div>
                <h3 className="fs-4 fw-bold text-white mb-0">ViVu Tour</h3>
                <small className="text-info">Du lịch Việt Nam</small>
              </div>
            </div>
            
            <p className=" small lh-base mb-3">
              Nền tảng đặt tour du lịch hàng đầu Việt Nam, chuyên tổ chức các chuyến du thuyền Hạ Long và tour khám phá miền Bắc với dịch vụ chất lượng cao.
            </p>
            
            {/* Awards & Certifications */}
            <div className="d-flex align-items-center mb-2">
              <div className="d-flex align-items-center me-4">
                <FaStar className="text-warning me-1" style={{fontSize: '12px'}} />
                <small className="">4.8/5 (1,200+ đánh giá)</small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaAward className="text-info me-1" style={{fontSize: '12px'}} />
              <small className="">Top Seller 2024</small>
            </div>
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
                    onMouseEnter={(e) => e.target.style.color = '#20c997'}
                    onMouseLeave={(e) => e.target.style.color = '#adb5bd'}
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
                    onMouseEnter={(e) => e.target.style.color = '#20c997'}
                    onMouseLeave={(e) => e.target.style.color = '#adb5bd'}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-lg-5 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3 text-white">Liên hệ</h5>
            
            <div className="mb-3">
              <div className="d-flex align-items-center mb-3">
                <FaPhone style={styles.contactIcon} className="me-2" />
                <div>
                  <div className="text-white fw-medium">0922.222.016</div>
                  <small className="">Hotline 24/7</small>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope style={styles.contactIcon} className="me-2" />
                <small className="">info@vivutour.com</small>
              </div>
              
              <div className="d-flex align-items-start mb-3">
                <FaMapMarkerAlt style={styles.contactIcon} className="me-2 mt-1" />
                <div>
                  <small className=" d-block">123 Đường ABC, Quận 1</small>
                  <small className="">TP. Hồ Chí Minh</small>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <FaClock style={styles.contactIcon} className="me-2" />
                <small className="">8:00 - 20:00 (T2-CN)</small>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-white fw-medium mb-3">Theo dõi chúng tôi</p>
              <div className="d-flex gap-3">
                <a 
                  href="#" 
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1877f2';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#495057';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <FaFacebookF size={16} />
                </a>
                <a 
                  href="#" 
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#495057';
                    e.target.style.background = '#495057';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <FaInstagram size={16} />
                </a>
                <a 
                  href="#" 
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#000';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#495057';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <FaTiktok size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="border-top border-secondary pt-4 mt-4">
          <h5 className="fw-semibold mb-3 text-white text-center">Điểm đến phổ biến</h5>
          <div className="text-center">
            {destinations.map((destination, index) => (
              <span 
                key={index}
                style={styles.destinationTag}
                className="me-2 mb-2"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#20c997';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#495057';
                  e.target.style.color = '#adb5bd';
                }}
              >
                {destination}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-4 p-4 bg-dark rounded">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <h5 className="fw-semibold text-white mb-2">Nhận ưu đãi đặc biệt</h5>
              <p className=" small mb-0">Đăng ký để nhận thông tin tour mới và khuyến mãi hấp dẫn</p>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleEmailSubmit} className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  style={styles.newsletterInput}
                  placeholder="Nhập email của bạn"
                  required
                />
                <button 
                  type="submit" 
                  className="btn text-white px-4"
                  style={styles.newsletterButton}
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={styles.footerBottom}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <p className=" mb-1 small">
                © {currentYear} ViVu Tour. Tất cả quyền được bảo lưu.
              </p>
              <p className=" mb-0" style={{fontSize: '12px'}}>
                Giấy phép kinh doanh số: 0123456789 - Cấp bởi Sở KH&ĐT TP.HCM
              </p>
            </div>
            
            <div className="col-md-4 text-md-end mt-2 mt-md-0">
              <div className="d-flex justify-content-md-end justify-content-center gap-3">
                <a href="/privacy" style={{...styles.footerLink, fontSize: '12px'}}>Chính sách bảo mật</a>
                <a href="/terms" style={{...styles.footerLink, fontSize: '12px'}}>Điều khoản</a>
                <a href="/sitemap" style={{...styles.footerLink, fontSize: '12px'}}>Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;