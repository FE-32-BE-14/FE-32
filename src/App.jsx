import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageDonasi from "./pages/PageDonasi";
import PagePembayaran from "./pages/PagePembayaran";
import PageAcceptPembayaran from "./pages/PageAcceptPembayaran";
import CustomNavbar from "./components/Navbar/Navbar";
import { VerifikasiProvider } from "../context/VerifikasiContext.";
import VerifikasiList from "./components/Verifikasi/VerifikasiList.jsx";

function App() {
  return (
    <Router>
      <VerifikasiProvider>
        <CustomNavbar/>
        <Routes>
          <Route path="/" element={<VerifikasiList />} />
          <Route path="/donasi" element={<PageDonasi />} />
          <Route path="/pembayaran" element={<PagePembayaran />} />
          <Route path="/accept" element={<PageAcceptPembayaran />} />
        </Routes>
      </VerifikasiProvider>
    </Router>
  );
}

export default App;