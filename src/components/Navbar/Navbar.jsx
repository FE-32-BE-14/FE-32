import React from "react";
import "./Navbar.css";
import { Nav, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img
            src="#"
            className="navbar-logo img"
            alt="Logo"
          />
          <span className="logo-text">ASEAN Youth Organization</span>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Cari" className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="navbar-items">
        <Nav.Item className="navbar-item">
          <Nav.Link href="#beranda">Beranda</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <NavDropdown title="Program" id="program-dropdown">
            <NavDropdown.Item href="#program1">Program 1</NavDropdown.Item>
            <NavDropdown.Item href="#program2">Program 2</NavDropdown.Item>
            <NavDropdown.Item href="#program3">Program 3</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Nav.Link href="#forum">Forum</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Nav.Link href="#tentang-kami">Tentang Kami</Nav.Link>
        </Nav.Item>
      </div>
      <div className="navbar-profile">
        <img
          src="#"
          className="profile-image"
          alt="Profile"
        />
      </div>
    </Nav>
  );
};

export default CustomNavbar;
