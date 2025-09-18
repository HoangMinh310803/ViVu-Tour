import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import {
  Menu,
  Home,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  Bell,
  Search,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Plus,
  ChevronLeft,
  ChevronRight,
  Ship,
  X as XIcon,
} from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const [bookingsPage, setBookingsPage] = useState(1);
  const [toursPage, setToursPage] = useState(1);
  const [customersPage, setCustomersPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const [settingsTab, setSettingsTab] = useState("general");
  const [isAddTourModalOpen, setIsAddTourModalOpen] = useState(false);

  React.useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.overflow = "";
      document.documentElement.style.margin = "";
      document.documentElement.style.padding = "";
    };
  }, []);

  // ====================================================================
  // DATA SAMPLES
  // ====================================================================
  const salesData = [
    { name: "T1", sales: 4000, revenue: 2400 },
    { name: "T2", sales: 3000, revenue: 1398 },
    { name: "T3", sales: 2000, revenue: 9800 },
    { name: "T4", sales: 2780, revenue: 3908 },
    { name: "T5", sales: 1890, revenue: 4800 },
    { name: "T6", sales: 2390, revenue: 3800 },
    { name: "T7", sales: 3490, revenue: 4300 },
  ];
  const pieData = [
    { name: "Du thuyền cao cấp", value: 400, color: "#14B8A6" },
    { name: "Du thuyền trung cấp", value: 300, color: "#0891B2" },
    { name: "Du thuyền bình dân", value: 300, color: "#0F766E" },
    { name: "Tour khác", value: 200, color: "#84CC16" },
  ];
  const recentBookings = [
    {
      id: 1,
      customer: "Nguyễn Văn A",
      tour: "Heritage Bình Chuẩn Cát Bà",
      date: "2025-01-20",
      status: "confirmed",
      amount: "4,150,000đ",
    },
    {
      id: 2,
      customer: "Trần Thị B",
      tour: "Ambassador Hạ Long",
      date: "2025-01-22",
      status: "pending",
      amount: "3,850,000đ",
    },
    {
      id: 3,
      customer: "Lê Văn C",
      tour: "Grand Pioneers",
      date: "2025-01-25",
      status: "confirmed",
      amount: "5,150,000đ",
    },
    {
      id: 4,
      customer: "Phạm Thị D",
      tour: "Capella",
      date: "2025-01-28",
      status: "cancelled",
      amount: "2,950,000đ",
    },
  ];
  const allBookingsData = [
    {
      id: 1,
      customer: "Nguyễn Văn A",
      tour: "Heritage Bình Chuẩn Cát Bà",
      date: "2025-01-20",
      status: "confirmed",
      amount: "4,150,000đ",
    },
    {
      id: 2,
      customer: "Trần Thị B",
      tour: "Ambassador Hạ Long",
      date: "2025-01-22",
      status: "pending",
      amount: "3,850,000đ",
    },
    {
      id: 3,
      customer: "Lê Văn C",
      tour: "Grand Pioneers",
      date: "2025-01-25",
      status: "confirmed",
      amount: "5,150,000đ",
    },
    {
      id: 4,
      customer: "Phạm Thị D",
      tour: "Capella",
      date: "2025-01-28",
      status: "cancelled",
      amount: "2,950,000đ",
    },
    {
      id: 5,
      customer: "Hoàng Văn E",
      tour: "Stellar of the Seas",
      date: "2025-02-01",
      status: "confirmed",
      amount: "6,200,000đ",
    },
    {
      id: 6,
      customer: "Vũ Thị F",
      tour: "Paradise Grand",
      date: "2025-02-05",
      status: "pending",
      amount: "4,500,000đ",
    },
    {
      id: 7,
      customer: "Đặng Văn G",
      tour: "Scarlet Pearl",
      date: "2025-02-10",
      status: "confirmed",
      amount: "7,000,000đ",
    },
    {
      id: 8,
      customer: "Bùi Thị H",
      tour: "La Casta Regal",
      date: "2025-02-12",
      status: "cancelled",
      amount: "3,100,000đ",
    },
    {
      id: 9,
      customer: "Hồ Văn I",
      tour: "Ambassador Hạ Long",
      date: "2025-02-15",
      status: "confirmed",
      amount: "3,850,000đ",
    },
    {
      id: 10,
      customer: "Ngô Thị K",
      tour: "Heritage Bình Chuẩn Cát Bà",
      date: "2025-02-20",
      status: "pending",
      amount: "4,150,000đ",
    },
    {
      id: 11,
      customer: "Dương Văn M",
      tour: "Catherine Cruise",
      date: "2025-03-01",
      status: "confirmed",
      amount: "5,500,000đ",
    },
    {
      id: 12,
      customer: "Lý Thị N",
      tour: "Stellar of the Seas",
      date: "2025-03-05",
      status: "pending",
      amount: "6,200,000đ",
    },
    {
      id: 13,
      customer: "Mai Văn P",
      tour: "Paradise Grand",
      date: "2025-03-10",
      status: "confirmed",
      amount: "4,500,000đ",
    },
    {
      id: 14,
      customer: "Trịnh Thị Q",
      tour: "Ambassador Hạ Long",
      date: "2025-03-12",
      status: "cancelled",
      amount: "3,850,000đ",
    },
    {
      id: 15,
      customer: "Vương Văn R",
      tour: "Capella",
      date: "2025-03-15",
      status: "confirmed",
      amount: "2,950,000đ",
    },
  ];
  const allToursData = [
    {
      id: "T001",
      name: "Heritage Bình Chuẩn Cát Bà",
      destination: "Vịnh Lan Hạ",
      duration: "2 ngày 1 đêm",
      price: "4,150,000đ",
      status: "active",
    },
    {
      id: "T002",
      name: "Ambassador Hạ Long",
      destination: "Vịnh Hạ Long",
      duration: "2 ngày 1 đêm",
      price: "3,850,000đ",
      status: "active",
    },
    {
      id: "T003",
      name: "Grand Pioneers",
      destination: "Vịnh Lan Hạ",
      duration: "3 ngày 2 đêm",
      price: "5,150,000đ",
      status: "active",
    },
    {
      id: "T004",
      name: "Capella",
      destination: "Vịnh Hạ Long",
      duration: "2 ngày 1 đêm",
      price: "2,950,000đ",
      status: "inactive",
    },
    {
      id: "T005",
      name: "Stellar of the Seas",
      destination: "Vịnh Hạ Long",
      duration: "3 ngày 2 đêm",
      price: "6,200,000đ",
      status: "active",
    },
    {
      id: "T006",
      name: "Paradise Grand",
      destination: "Vịnh Lan Hạ",
      duration: "2 ngày 1 đêm",
      price: "4,500,000đ",
      status: "active",
    },
    {
      id: "T007",
      name: "Scarlet Pearl",
      destination: "Vịnh Hạ Long",
      duration: "3 ngày 2 đêm",
      price: "7,000,000đ",
      status: "active",
    },
    {
      id: "T008",
      name: "La Casta Regal",
      destination: "Vịnh Lan Hạ",
      duration: "2 ngày 1 đêm",
      price: "3,100,000đ",
      status: "inactive",
    },
    {
      id: "T009",
      name: "Catherine Cruise",
      destination: "Vịnh Hạ Long",
      duration: "2 ngày 1 đêm",
      price: "5,500,000đ",
      status: "active",
    },
    {
      id: "T010",
      name: "Rita Cruise",
      destination: "Vịnh Lan Hạ",
      duration: "3 ngày 2 đêm",
      price: "6,800,000đ",
      status: "active",
    },
    {
      id: "T011",
      name: "Peony Cruises",
      destination: "Vịnh Hạ Long",
      duration: "2 ngày 1 đêm",
      price: "3,200,000đ",
      status: "active",
    },
    {
      id: "T012",
      name: "Dora Cruise",
      destination: "Vịnh Lan Hạ",
      duration: "2 ngày 1 đêm",
      price: "4,000,000đ",
      status: "inactive",
    },
  ];
  const allCustomersData = [
    {
      id: "C001",
      name: "Nguyễn Văn A",
      email: "nguyenvana@email.com",
      phone: "0901234567",
      joinDate: "2024-01-15",
      status: "active",
    },
    {
      id: "C002",
      name: "Trần Thị B",
      email: "tranthib@email.com",
      phone: "0912345678",
      joinDate: "2024-02-20",
      status: "active",
    },
    {
      id: "C003",
      name: "Lê Văn C",
      email: "levanc@email.com",
      phone: "0987654321",
      joinDate: "2024-03-10",
      status: "banned",
    },
    {
      id: "C004",
      name: "Phạm Thị D",
      email: "phamthid@email.com",
      phone: "0978123456",
      joinDate: "2024-05-01",
      status: "active",
    },
    {
      id: "C005",
      name: "Hoàng Văn E",
      email: "hoangvane@email.com",
      phone: "0934567890",
      joinDate: "2024-06-18",
      status: "active",
    },
    {
      id: "C006",
      name: "Vũ Thị F",
      email: "vuthif@email.com",
      phone: "0945678901",
      joinDate: "2024-08-22",
      status: "active",
    },
    {
      id: "C007",
      name: "Đặng Văn G",
      email: "dangvang@email.com",
      phone: "0902345678",
      joinDate: "2024-09-01",
      status: "active",
    },
    {
      id: "C008",
      name: "Bùi Thị H",
      email: "buithih@email.com",
      phone: "0913456789",
      joinDate: "2024-10-11",
      status: "active",
    },
    {
      id: "C009",
      name: "Hồ Văn I",
      email: "hovani@email.com",
      phone: "0988765432",
      joinDate: "2024-11-05",
      status: "banned",
    },
    {
      id: "C010",
      name: "Ngô Thị K",
      email: "ngothik@email.com",
      phone: "0977123456",
      joinDate: "2024-12-15",
      status: "active",
    },
    {
      id: "C011",
      name: "Dương Văn M",
      email: "duongvanm@email.com",
      phone: "0933567890",
      joinDate: "2025-01-20",
      status: "active",
    },
  ];
  const revenueProfitData = [
    { name: "T1", revenue: 4000, profit: 2400 },
    { name: "T2", revenue: 3000, profit: 1398 },
    { name: "T3", revenue: 2000, profit: 1800 },
    { name: "T4", revenue: 2780, profit: 1908 },
    { name: "T5", revenue: 1890, profit: 800 },
    { name: "T6", revenue: 2390, profit: 1800 },
    { name: "T7", revenue: 3490, profit: 2300 },
    { name: "T8", revenue: 4200, profit: 2500 },
  ];
  const topToursByRevenue = [
    { name: "Heritage Bình Chuẩn", revenue: "1.2 tỷ", bookings: 290 },
    { name: "Ambassador Hạ Long", revenue: "980 triệu", bookings: 250 },
    { name: "Stellar of the Seas", revenue: "850 triệu", bookings: 140 },
    { name: "Scarlet Pearl", revenue: "700 triệu", bookings: 100 },
    { name: "Paradise Grand", revenue: "650 triệu", bookings: 150 },
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "bookings", label: "Đặt Tour", icon: ShoppingCart },
    { id: "tours", label: "Quản lý Tour", icon: Package },
    { id: "customers", label: "Khách hàng", icon: Users },
    { id: "analytics", label: "Thống kê", icon: BarChart3 },
    { id: "settings", label: "Cài đặt", icon: Settings },
  ];

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#f3f4f6",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    sidebar: {
      backgroundColor: "white",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      width: sidebarOpen ? "256px" : "64px",
      display: "flex",
      flexDirection: "column",
    },
    sidebarHeader: {
      padding: "16px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logo: {
      width: "32px",
      height: "32px",
      backgroundColor: "#14B8A6",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logoText: { fontSize: "20px", fontWeight: "bold", color: "#1f2937" },
    nav: { marginTop: "32px" },
    navItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      padding: "12px 16px",
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      transition: "all 0.2s ease",
      color: "#6b7280",
      textAlign: "left",
    },
    navItemActive: {
      backgroundColor: "#f0fdfa",
      color: "#0f766e",
      borderRight: "2px solid #14B8A6",
    },
    navItemHover: { backgroundColor: "#f0fdfa", color: "#0f766e" },
    navItemText: {
      marginLeft: "12px",
      display: sidebarOpen ? "block" : "none",
      whiteSpace: "nowrap",
    },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    header: {
      backgroundColor: "white",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerLeft: { display: "flex", alignItems: "center", gap: "16px" },
    headerTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#1f2937",
      margin: 0,
    },
    headerRight: { display: "flex", alignItems: "center", gap: "16px" },
    searchContainer: { position: "relative" },
    // Cập nhật style cho ô tìm kiếm
    searchInput: {
      paddingLeft: "40px",
      paddingRight: "16px",
      paddingTop: "8px",
      paddingBottom: "8px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      outline: "none",
      width: "200px",
      backgroundColor: "white", // Nền trắng
    },
    searchIcon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af",
    },
    notificationBtn: {
      position: "relative",
      padding: "8px",
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      borderRadius: "6px",
      color: "#6b7280",
    },
    notificationBadge: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      backgroundColor: "#ef4444",
      color: "white",
      fontSize: "10px",
      borderRadius: "50%",
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    userProfile: { display: "flex", alignItems: "center", gap: "12px" },
    userAvatar: {
      width: "32px",
      height: "32px",
      backgroundColor: "#14B8A6",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "14px",
      fontWeight: "500",
    },
    customerAvatar: {
      width: "32px",
      height: "32px",
      backgroundColor: "#0891B2",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "14px",
      fontWeight: "500",
      marginRight: "12px",
    },
    userInfo: { display: "block" },
    userName: {
      fontWeight: "500",
      color: "#1f2937",
      fontSize: "14px",
      margin: 0,
    },
    userEmail: { color: "#6b7280", fontSize: "12px", margin: 0 },
    content: { flex: 1, overflowY: "auto", padding: "24px" },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
      marginBottom: "24px",
    },
    statCard: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e5e7eb",
    },
    statCardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    statCardLeft: { flex: 1 },
    statCardTitle: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#6b7280",
      margin: "0 0 4px 0",
    },
    statCardValue: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1f2937",
      margin: "0 0 8px 0",
    },
    statCardChange: { display: "flex", alignItems: "center", gap: "4px" },
    statCardTrend: { fontSize: "14px" },
    statCardIcon: {
      backgroundColor: "#f0fdfa",
      padding: "12px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    chartsGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "24px",
      marginBottom: "24px",
    },
    chartCard: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e5e7eb",
    },
    chartTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "16px",
    },
    table: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e5e7eb",
      overflow: "hidden",
    },
    tableHeader: {
      padding: "24px",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    tableTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
      margin: 0,
    },
    tableActions: {
      color: "#14B8A6",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "500",
    },
    tableContent: { overflowX: "auto" },
    tableEl: {
      width: "100%",
      borderCollapse: "collapse",
      tableLayout: "fixed",
    },
    tableHead: { backgroundColor: "#f9fafb" },
    tableHeadCell: {
      padding: "12px 24px",
      textAlign: "left",
      fontSize: "12px",
      fontWeight: "500",
      color: "#6b7280",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    tableCell: {
      padding: "16px 24px",
      fontSize: "14px",
      verticalAlign: "middle",
    },
    tableCellEllipsis: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    statusBadge: {
      display: "inline-flex",
      padding: "2px 8px",
      fontSize: "12px",
      fontWeight: "600",
      borderRadius: "12px",
    },
    actionButtons: { display: "flex", gap: "8px" },
    actionBtn: {
      padding: "4px",
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      borderRadius: "4px",
    },
    primaryButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#14B8A6",
      color: "white",
      border: "none",
      padding: "10px 16px",
      borderRadius: "6px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    secondaryButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      border: "1px solid #d1d5db",
      padding: "10px 16px",
      borderRadius: "6px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    paginationContainer: {
      padding: "16px 24px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      borderTop: "1px solid #e5e7eb",
      color: "#6b7280",
      fontSize: "14px",
    },
    paginationControls: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginLeft: "24px",
    },
    paginationButton: {
      padding: "8px",
      border: "1px solid #d1d5db",
      backgroundColor: "white",
      cursor: "pointer",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      color: "#6b7280",
      transition: "background-color 0.2s",
    },
    paginationButtonDisabled: { cursor: "not-allowed", opacity: 0.5 },
    formGroup: { marginBottom: "20px" },
    formLabel: {
      display: "block",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "8px",
      fontSize: "14px",
    },
    // Cập nhật style chung cho các ô input
    formInput: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
      outline: "none",
      boxSizing: "border-box",
      backgroundColor: "white", // Nền trắng
    },
    formTextarea: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
      outline: "none",
      boxSizing: "border-box",
      fontFamily: "inherit",
      backgroundColor: "white", // Nền trắng
    },
    formSelect: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
      outline: "none",
      boxSizing: "border-box",
      backgroundColor: "white",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(17, 24, 39, 0.3)",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContainer: {
      backgroundColor: "white",
      borderRadius: "8px",
      width: "90%",
      maxWidth: "500px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    modalHeader: {
      padding: "16px 24px",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    modalTitle: { margin: 0, fontSize: "18px", fontWeight: "600" },
    modalCloseButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "4px",
    },
    modalBody: { padding: "24px" },
    modalFooter: {
      padding: "16px 24px",
      borderTop: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px",
    },
    settingsCard: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e5e7eb",
      marginBottom: "24px",
    },
    settingsHeader: { padding: "16px 24px", borderBottom: "1px solid #e5e7eb" },
    settingsTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1f2937",
      margin: 0,
    },
    settingsContent: { padding: "24px" },
    settingsTabsContainer: {
      borderBottom: "1px solid #e5e7eb",
      marginBottom: "24px",
      display: "flex",
    },
    settingsTab: {
      padding: "12px 20px",
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
      color: "#6b7280",
      fontWeight: "500",
      borderBottom: "2px solid transparent",
    },
    settingsTabActive: { color: "#14B8A6", borderBottom: "2px solid #14B8A6" },
    settingsFooter: {
      paddingTop: "20px",
      marginTop: "20px",
      borderTop: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "flex-end",
    },
  };

  const getInitials = (name) => {
    const names = name.split(" ");
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`;
    }
    return name.substring(0, 2);
  };
  const getStatusStyle = (status) => {
    const baseStyle = styles.statusBadge;
    switch (status) {
      case "confirmed":
        return { ...baseStyle, backgroundColor: "#dcfce7", color: "#166534" };
      case "pending":
        return { ...baseStyle, backgroundColor: "#fef3c7", color: "#92400e" };
      case "cancelled":
        return { ...baseStyle, backgroundColor: "#fee2e2", color: "#991b1b" };
      default:
        return baseStyle;
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Đã xác nhận";
      case "pending":
        return "Chờ xử lý";
      case "cancelled":
        return "Đã hủy";
      default:
        return status;
    }
  };
  const getTourStatusStyle = (status) => {
    const baseStyle = styles.statusBadge;
    switch (status) {
      case "active":
        return { ...baseStyle, backgroundColor: "#dcfce7", color: "#166534" };
      case "inactive":
        return { ...baseStyle, backgroundColor: "#fee2e2", color: "#991b1b" };
      default:
        return baseStyle;
    }
  };
  const getTourStatusText = (status) => {
    switch (status) {
      case "active":
        return "Đang hoạt động";
      case "inactive":
        return "Tạm dừng";
      default:
        return status;
    }
  };
  const getCustomerStatusStyle = (status) => {
    const baseStyle = styles.statusBadge;
    switch (status) {
      case "active":
        return { ...baseStyle, backgroundColor: "#dcfce7", color: "#166534" };
      case "banned":
        return { ...baseStyle, backgroundColor: "#fee2e2", color: "#991b1b" };
      default:
        return baseStyle;
    }
  };
  const getCustomerStatusText = (status) => {
    switch (status) {
      case "active":
        return "Hoạt động";
      case "banned":
        return "Bị chặn";
      default:
        return status;
    }
  };

  const StatCard = ({ title, value, change, icon: Icon, trend }) => (
    <div style={styles.statCard}>
      <div style={styles.statCardContent}>
        <div style={styles.statCardLeft}>
          <p style={styles.statCardTitle}>{title}</p>
          <p style={styles.statCardValue}>{value}</p>
          <div style={styles.statCardChange}>
            {trend === "up" ? (
              <TrendingUp size={16} color="#10b981" />
            ) : (
              <TrendingDown size={16} color="#ef4444" />
            )}
            <span
              style={{
                ...styles.statCardTrend,
                color: trend === "up" ? "#10b981" : "#ef4444",
              }}
            >
              {" "}
              {change}{" "}
            </span>
            <span
              style={{
                ...styles.statCardTrend,
                color: "#6b7280",
                marginLeft: "4px",
              }}
            >
              {" "}
              so với tháng trước{" "}
            </span>
          </div>
        </div>
        <div style={styles.statCardIcon}>
          {" "}
          <Icon size={24} color="#14B8A6" />{" "}
        </div>
      </div>
    </div>
  );
  const renderDashboard = () => (
    <React.Fragment>
      {" "}
      <div style={styles.statsGrid}>
        <StatCard
          title="Tổng doanh thu"
          value="128.5M đ"
          change="+12.5%"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Đơn đặt tour"
          value="1,234"
          change="+8.2%"
          icon={ShoppingCart}
          trend="up"
        />
        <StatCard
          title="Khách hàng"
          value="856"
          change="+5.1%"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Tour hoạt động"
          value="42"
          change="-2.4%"
          icon={Package}
          trend="down"
        />
      </div>
      <div style={{ ...styles.chartsGrid, gridTemplateColumns: "2fr 1fr" }}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Doanh thu theo tháng</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#14B8A6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Phân loại tour</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Đặt tour gần đây</h3>
          <a
            href="#"
            style={styles.tableActions}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("bookings");
            }}
          >
            Xem tất cả
          </a>
        </div>
        <div style={styles.tableContent}>
          <table style={styles.tableEl}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={styles.tableHeadCell}>Khách hàng</th>
                <th style={styles.tableHeadCell}>Tour</th>
                <th style={styles.tableHeadCell}>Ngày khởi hành</th>
                <th style={styles.tableHeadCell}>Trạng thái</th>
                <th style={styles.tableHeadCell}>Số tiền</th>
                <th style={styles.tableHeadCell}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} style={styles.tableRow}>
                  <td
                    style={{
                      ...styles.tableCell,
                      fontWeight: "500",
                      color: "#1f2937",
                    }}
                  >
                    {booking.customer}
                  </td>
                  <td style={{ ...styles.tableCell, color: "#6b7280" }}>
                    {booking.tour}
                  </td>
                  <td style={{ ...styles.tableCell, color: "#6b7280" }}>
                    {booking.date}
                  </td>
                  <td style={styles.tableCell}>
                    <span style={getStatusStyle(booking.status)}>
                      {getStatusText(booking.status)}
                    </span>
                  </td>
                  <td
                    style={{
                      ...styles.tableCell,
                      fontWeight: "500",
                      color: "#1f2937",
                    }}
                  >
                    {booking.amount}
                  </td>
                  <td style={styles.tableCell}>
                    <div style={styles.actionButtons}>
                      <button style={{ ...styles.actionBtn, color: "#14B8A6" }}>
                        <Eye size={16} />
                      </button>
                      <button style={{ ...styles.actionBtn, color: "#3b82f6" }}>
                        <Edit size={16} />
                      </button>
                      <button style={{ ...styles.actionBtn, color: "#ef4444" }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>{" "}
    </React.Fragment>
  );

  const renderBookingsPage = () => {
    const totalBookings = allBookingsData.length;
    const totalPages = Math.ceil(totalBookings / ITEMS_PER_PAGE);
    const startIndex = (bookingsPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalBookings);
    const currentBookings = allBookingsData.slice(startIndex, endIndex);
    const handlePrevPage = () =>
      setBookingsPage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () =>
      setBookingsPage((prev) => Math.min(prev + 1, totalPages));
    return (
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Danh sách đặt tour</h3>
          <button style={styles.primaryButton}>
            <Plus size={16} /> Thêm mới
          </button>
        </div>
        <div style={styles.tableContent}>
          <table style={styles.tableEl}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={{ ...styles.tableHeadCell, width: "20%" }}>
                  Khách hàng
                </th>
                <th style={{ ...styles.tableHeadCell, width: "30%" }}>Tour</th>
                <th style={{ ...styles.tableHeadCell, width: "15%" }}>
                  Ngày khởi hành
                </th>
                <th style={{ ...styles.tableHeadCell, width: "15%" }}>
                  Trạng thái
                </th>
                <th style={{ ...styles.tableHeadCell, width: "10%" }}>
                  Số tiền
                </th>
                <th style={{ ...styles.tableHeadCell, width: "10%" }}>
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((booking) => (
                <tr key={booking.id} style={styles.tableRow}>
                  <td
                    style={{
                      ...styles.tableCell,
                      ...styles.tableCellEllipsis,
                      fontWeight: "500",
                      color: "#1f2937",
                    }}
                  >
                    {booking.customer}
                  </td>
                  <td
                    style={{
                      ...styles.tableCell,
                      ...styles.tableCellEllipsis,
                      color: "#6b7280",
                    }}
                  >
                    {booking.tour}
                  </td>
                  <td style={styles.tableCell}>{booking.date}</td>
                  <td style={styles.tableCell}>
                    <span style={getStatusStyle(booking.status)}>
                      {getStatusText(booking.status)}
                    </span>
                  </td>
                  <td style={styles.tableCell}>{booking.amount}</td>
                  <td style={styles.tableCell}>
                    <div style={styles.actionButtons}>
                      <button style={{ ...styles.actionBtn, color: "#14B8A6" }}>
                        <Eye size={16} />
                      </button>
                      <button style={{ ...styles.actionBtn, color: "#3b82f6" }}>
                        <Edit size={16} />
                      </button>
                      <button style={{ ...styles.actionBtn, color: "#ef4444" }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={styles.paginationContainer}>
          <span>
            Hiển thị {startIndex + 1}-{endIndex} của {totalBookings}
          </span>
          <div style={styles.paginationControls}>
            <button
              style={{
                ...styles.paginationButton,
                ...(bookingsPage === 1 ? styles.paginationButtonDisabled : {}),
              }}
              onClick={handlePrevPage}
              disabled={bookingsPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              style={{
                ...styles.paginationButton,
                ...(bookingsPage === totalPages
                  ? styles.paginationButtonDisabled
                  : {}),
              }}
              onClick={handleNextPage}
              disabled={bookingsPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderToursPage = () => {
    const totalTours = allToursData.length;
    const totalPages = Math.ceil(totalTours / ITEMS_PER_PAGE);
    const startIndex = (toursPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalTours);
    const currentTours = allToursData.slice(startIndex, endIndex);
    const handlePrevPage = () => setToursPage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () =>
      setToursPage((prev) => Math.min(prev + 1, totalPages));
    return (
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Danh sách Tour</h3>
          <button
            onClick={() => setIsAddTourModalOpen(true)}
            style={styles.primaryButton}
          >
            <Plus size={16} /> Thêm Tour mới
          </button>
        </div>
        <div style={styles.tableContent}>
          <table style={styles.tableEl}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={{ ...styles.tableHeadCell, width: "35%" }}>
                  Tên Tour
                </th>
                <th style={{ ...styles.tableHeadCell, width: "20%" }}>
                  Điểm đến
                </th>
                <th style={{ ...styles.tableHeadCell, width: "15%" }}>
                  Thời gian
                </th>
                <th style={{ ...styles.tableHeadCell, width: "10%" }}>Giá</th>
                <th style={{ ...styles.tableHeadCell, width: "10%" }}>
                  Trạng thái
                </th>
                <th style={{ ...styles.tableHeadCell, width: "10%" }}>
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {currentTours.map((tour) => (
                <tr key={tour.id} style={styles.tableRow}>
                  <td
                    style={{
                      ...styles.tableCell,
                      ...styles.tableCellEllipsis,
                      fontWeight: "500",
                      color: "#1f2937",
                    }}
                  >
                    {tour.name}
                  </td>
                  <td
                    style={{ ...styles.tableCell, ...styles.tableCellEllipsis }}
                  >
                    {tour.destination}
                  </td>
                  <td style={styles.tableCell}>{tour.duration}</td>
                  <td style={styles.tableCell}>{tour.price}</td>
                  <td style={styles.tableCell}>
                    <span style={getTourStatusStyle(tour.status)}>
                      {getTourStatusText(tour.status)}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    <div style={styles.actionButtons}>
                      <button style={{ ...styles.actionBtn, color: "#14B8A6" }}>
                        <Eye size={16} />
                      </button>
                      <button style={{ ...styles.actionBtn, color: "#3b82f6" }}>
                        <Edit size={16} />
                      </button>
                      <button style={{ ...styles.actionBtn, color: "#ef4444" }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={styles.paginationContainer}>
          <span>
            Hiển thị {startIndex + 1}-{endIndex} của {totalTours}
          </span>
          <div style={styles.paginationControls}>
            <button
              style={{
                ...styles.paginationButton,
                ...(toursPage === 1 ? styles.paginationButtonDisabled : {}),
              }}
              onClick={handlePrevPage}
              disabled={toursPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              style={{
                ...styles.paginationButton,
                ...(toursPage === totalPages
                  ? styles.paginationButtonDisabled
                  : {}),
              }}
              onClick={handleNextPage}
              disabled={toursPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCustomersPage = () => {
    const totalCustomers = allCustomersData.length;
    const totalPages = Math.ceil(totalCustomers / ITEMS_PER_PAGE);
    const startIndex = (customersPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalCustomers);
    const currentCustomers = allCustomersData.slice(startIndex, endIndex);
    const handlePrevPage = () =>
      setCustomersPage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () =>
      setCustomersPage((prev) => Math.min(prev + 1, totalPages));
    return (
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Danh sách Khách hàng</h3>
          <button style={styles.primaryButton}>
            <Plus size={16} /> Thêm Khách hàng
          </button>
        </div>
        <div style={styles.tableContent}>
          <table style={styles.tableEl}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={{ ...styles.tableHeadCell, width: "25%" }}>
                  Tên Khách hàng
                </th>
                <th style={{ ...styles.tableHeadCell, width: "25%" }}>Email</th>
                <th style={{ ...styles.tableHeadCell, width: "15%" }}>
                  Số điện thoại
                </th>
                <th style={{ ...styles.tableHeadCell, width: "15%" }}>
                  Ngày tham gia
                </th>
                <th style={{ ...styles.tableHeadCell, width: "10%" }}>
                  Trạng thái
                </th>
                <th style={{ ...styles.tableHeadCell, width: "10%" }}>
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer) => (
                <tr key={customer.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={styles.customerAvatar}>
                        {getInitials(customer.name)}
                      </div>
                      <span
                        style={{
                          ...styles.tableCellEllipsis,
                          fontWeight: "500",
                          color: "#1f2937",
                        }}
                      >
                        {customer.name}
                      </span>
                    </div>
                  </td>
                  <td
                    style={{ ...styles.tableCell, ...styles.tableCellEllipsis }}
                  >
                    {customer.email}
                  </td>
                  <td style={styles.tableCell}>{customer.phone}</td>
                  <td style={styles.tableCell}>{customer.joinDate}</td>
                  <td style={styles.tableCell}>
                    <span style={getCustomerStatusStyle(customer.status)}>
                      {getCustomerStatusText(customer.status)}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    <div style={styles.actionButtons}>
                      <button style={{ ...styles.actionBtn, color: "#14B8A6" }}>
                        <Eye size={16} />
                      </button>
                      <button style={{ ...styles.actionBtn, color: "#3b82f6" }}>
                        <Edit size={16} />
                      </button>
                      <button style={{ ...styles.actionBtn, color: "#ef4444" }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={styles.paginationContainer}>
          <span>
            Hiển thị {startIndex + 1}-{endIndex} của {totalCustomers}
          </span>
          <div style={styles.paginationControls}>
            <button
              style={{
                ...styles.paginationButton,
                ...(customersPage === 1 ? styles.paginationButtonDisabled : {}),
              }}
              onClick={handlePrevPage}
              disabled={customersPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              style={{
                ...styles.paginationButton,
                ...(customersPage === totalPages
                  ? styles.paginationButtonDisabled
                  : {}),
              }}
              onClick={handleNextPage}
              disabled={customersPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAnalyticsPage = () => (
    <div>
      <div style={styles.statsGrid}>
        <StatCard
          title="Tổng doanh thu (Năm)"
          value="860M đ"
          change="+25.5%"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Lợi nhuận"
          value="215M đ"
          change="+18.2%"
          icon={TrendingUp}
          trend="up"
        />
        <StatCard
          title="Khách hàng mới"
          value="1,250"
          change="+15.1%"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Tỷ lệ hủy tour"
          value="5.8%"
          change="-1.4%"
          icon={TrendingDown}
          trend="down"
        />
      </div>
      <div style={styles.chartCard} style={{ marginBottom: "24px" }}>
        <h3 style={styles.chartTitle}>
          Phân tích Doanh thu & Lợi nhuận (8 tháng)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={revenueProfitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Doanh thu"
              stroke="#14B8A6"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="profit"
              name="Lợi nhuận"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <h3 style={styles.tableTitle}>Top 5 Tours theo Doanh thu</h3>
        </div>
        <div style={styles.tableContent}>
          <table style={styles.tableEl}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={{ ...styles.tableHeadCell, width: "50%" }}>
                  Tên Tour
                </th>
                <th style={{ ...styles.tableHeadCell, width: "25%" }}>
                  Tổng doanh thu
                </th>
                <th style={{ ...styles.tableHeadCell, width: "25%" }}>
                  Số lượng đặt
                </th>
              </tr>
            </thead>
            <tbody>
              {topToursByRevenue.map((tour) => (
                <tr key={tour.name} style={styles.tableRow}>
                  <td style={{ ...styles.tableCell, fontWeight: "500" }}>
                    {tour.name}
                  </td>
                  <td
                    style={{
                      ...styles.tableCell,
                      color: "#10b981",
                      fontWeight: "500",
                    }}
                  >
                    {tour.revenue}
                  </td>
                  <td style={styles.tableCell}>{tour.bookings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettingsPage = () => (
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

  const renderAddTourModal = () => (
    <div
      style={styles.modalOverlay}
      onClick={() => setIsAddTourModalOpen(false)}
    >
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>Thêm Tour Mới</h3>
          <button
            onClick={() => setIsAddTourModalOpen(false)}
            style={styles.modalCloseButton}
          >
            <XIcon size={20} />
          </button>
        </div>
        <div style={styles.modalBody}>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Tên Tour</label>
            <input
              type="text"
              style={styles.formInput}
              placeholder="VD: Du thuyền Ambassador"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Điểm đến</label>
            <input
              type="text"
              style={styles.formInput}
              placeholder="VD: Vịnh Hạ Long"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Thời gian</label>
            <input
              type="text"
              style={styles.formInput}
              placeholder="VD: 2 ngày 1 đêm"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Giá (VNĐ)</label>
            <input
              type="number"
              style={styles.formInput}
              placeholder="VD: 3850000"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Mô tả</label>
            <textarea
              rows="3"
              style={styles.formTextarea}
              placeholder="Nhập mô tả ngắn gọn về tour..."
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Trạng thái</label>
            <select style={styles.formSelect}>
              <option value="active">Đang hoạt động</option>
              <option value="inactive">Tạm dừng</option>
            </select>
          </div>
        </div>
        <div style={styles.modalFooter}>
          <button
            onClick={() => setIsAddTourModalOpen(false)}
            style={styles.secondaryButton}
          >
            Hủy
          </button>
          <button
            onClick={() => setIsAddTourModalOpen(false)}
            style={styles.primaryButton}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard();
      case "bookings":
        return renderBookingsPage();
      case "tours":
        return renderToursPage();
      case "customers":
        return renderCustomersPage();
      case "analytics":
        return renderAnalyticsPage();
      case "settings":
        return renderSettingsPage();
      default:
        return (
          <div style={styles.chartCard}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              {menuItems.find((item) => item.id === activeTab)?.label}
            </h2>
            <p style={{ color: "#6b7280" }}>
              Nội dung{" "}
              {menuItems
                .find((item) => item.id === activeTab)
                ?.label.toLowerCase()}{" "}
              sẽ được hiển thị ở đây...
            </p>
          </div>
        );
    }
  };

  const handleTabClick = (tabId) => {
    setBookingsPage(1);
    setToursPage(1);
    setCustomersPage(1);
    setActiveTab(tabId);
  };

  return (
    <div style={styles.container}>
      {isAddTourModalOpen && renderAddTourModal()}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <div style={styles.logo}>
            <Ship size={20} color="white" />
          </div>
          {sidebarOpen && <span style={styles.logoText}>TourAdmin</span>}
        </div>
        <nav style={styles.nav}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                style={{
                  ...styles.navItem,
                  ...(activeTab === item.id ? styles.navItemActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== item.id) {
                    const target = e.currentTarget;
                    Object.assign(target.style, styles.navItemHover);
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== item.id) {
                    const target = e.currentTarget;
                    target.style.backgroundColor = "transparent";
                    target.style.color = "#6b7280";
                  }
                }}
              >
                <Icon size={20} />
                <span style={styles.navItemText}>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ ...styles.notificationBtn, marginRight: "8px" }}
            >
              <Menu size={24} />
            </button>
            <h1 style={styles.headerTitle}>
              {menuItems.find((item) => item.id === activeTab)?.label ||
                "Dashboard"}
            </h1>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.searchContainer}>
              <Search size={20} style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                style={styles.searchInput}
              />
            </div>
            <button style={styles.notificationBtn}>
              <Bell size={24} />
              <span style={styles.notificationBadge}>3</span>
            </button>
            <div style={styles.userProfile}>
              <div style={styles.userAvatar}>AD</div>
              <div style={styles.userInfo}>
                <p style={styles.userName}>Admin User</p>
                <p style={styles.userEmail}>admin@tourcompany.com</p>
              </div>
            </div>
          </div>
        </header>
        <main style={styles.content}>{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
