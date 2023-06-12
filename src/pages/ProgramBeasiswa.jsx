import React from "react";
import "./ProgramBeasiswa.css";

const ProgramBeasiswa = () => {
  return (
    <div className="program-beasiswa">
      <div className="program-beasiswa-content">
        <h2 className="program-beasiswa-title">Program Beasiswa</h2>
        <div className="penyedia-program">
          <div className="penyedia-program-item">
            <img
              src="logo-mitra-1.png"
              alt="Logo Mitra"
              className="mitra-logo"
            />
            <div className="penyedia-program-info">
              <h3 className="penyedia-program-title">
                Beasiswa Untuk Mahasiswa Informatika
              </h3>
              <p className="penyedia-program-detail">
                Kuota Peserta: 20
                <br />
                Tanggal Pendaftaran: 10 Mei - 9 Juni 2023
                <br />
                Alur Seleksi: 3 alur seleksi
              </p>
            </div>
          </div>
          <div className="penyedia-program-item">
            <img
              src="logo-mitra-2.png"
              alt="Logo Mitra"
              className="mitra-logo"
            />
            <div className="penyedia-program-info">
              <h3 className="penyedia-program-title">
                Beasiswa Untuk Mahasiswa Teknik
              </h3>
              <p className="penyedia-program-detail">
                Kuota Peserta: 15
                <br />
                Tanggal Pendaftaran: 15 Mei - 14 Juni 2023
                <br />
                Alur Seleksi: 2 alur seleksi
              </p>
            </div>
          </div>
          {/* Tambahkan lebih banyak item penyedia program di sini */}
        </div>
      </div>
    </div>
  );
};

export default ProgramBeasiswa;
