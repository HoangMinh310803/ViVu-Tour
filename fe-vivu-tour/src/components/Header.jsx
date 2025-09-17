// src/components/Header.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/logo.png" alt="MixiViVu Logo" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#du-thuyen">Tìm du thuyền</Nav.Link>
            <Nav.Link href="#may-bay">Tìm vé máy bay</Nav.Link>
            <Nav.Link href="#khach-san">Tìm khách sạn</Nav.Link>
            <Nav.Link href="#doanh-nghiep">Doanh nghiệp</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="#hotline"
              className="d-flex align-items-center me-3"
            >
              <i className="bi bi-telephone-fill me-2"></i> Hotline: 0922222016
            </Nav.Link>
            <Button variant="info" className="text-white fw-bold">
              Liên hệ MixiVivu
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
