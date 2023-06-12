import React from "react";
import "./Navbar.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Faseanyouth.net%2Fwp-content%2Fuploads%2F2022%2F07%2FLogo-AYO-Small-Web.png&tbnid=pe0ZrppsZHdDWM&vet=12ahUKEwi5wfmSkrn_AhXJ2HMBHddYCkcQMygAegUIARCiAQ..i&imgrefurl=https%3A%2F%2Faseanyouth.net%2F&docid=oX0yl_qubR8FWM&w=319&h=120&q=logo%20asean%20youth%20organization&ved=2ahUKEwi5wfmSkrn_AhXJ2HMBHddYCkcQMygAegUIARCiAQ"
          width="30"
          height="30"
          alt="Logo"
        />
        <span className="logo-text">ASEAN Youth Organization</span>
      </div>
      <Nav.Item className="navbar-item">
        <Nav.Link href="#beranda">Beranda</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navbar-item">
        <Nav.Link href="#program">Program</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navbar-item">
        <Nav.Link href="#forum">Forum</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navbar-item">
        <Nav.Link href="#tentang-kami">Tentang Kami</Nav.Link>
      </Nav.Item>
      <div className="navbar-search">
        <input type="text" placeholder="Cari" className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-profile">
        <img
          src="https://id.pinterest.com/pin/125045327148157157/"
          width="30"
          height="30"
          alt="Profile"
        />
      </div>
    </Nav>
  );
};

export default CustomNavbar;
