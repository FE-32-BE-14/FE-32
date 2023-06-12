import React from "react";
import "./BeasiswaDetail.css";

const BeasiswaDetail = () => {
  return (
    <div className="beasiswa-detail">
      <h2 className="beasiswa-title">Nama Beasiswa</h2>
      <div className="beasiswa-info">
        <div className="beasiswa-info-item">
          <span className="info-label">Lokasi:</span> Daring
        </div>
        <div className="beasiswa-info-item">
          <span className="info-label">Tanggal Pendaftaran:</span> 1 Januari -
          31 Januari 2023
        </div>
        <div className="beasiswa-info-item">
          <span className="info-label">Tanggal Pengumuman:</span> 1 Februari
          2023
        </div>
      </div>
      <div className="beasiswa-partner">
        <img
          className="partner-logo"
          src="logo_mitra.png" // Ganti dengan URL atau path logo mitra
          alt="Logo Mitra"
        />
        <span className="partner-name">Nama Mitra</span>
      </div>
      <div className="beasiswa-description">Deskripsi beasiswa...</div>
    </div>
  );
};

export default BeasiswaDetail;
