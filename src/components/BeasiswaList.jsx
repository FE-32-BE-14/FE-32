import React from "react";
import "./BeasiswaList.css";
const BeasiswaList = () => {
  const beasiswaData = [
    {
      id: 1,
      logo: "https://example.com/logo1.png",
      title: "Beasiswa A",
      quota: 20,
      registrationDate: "10 Mei - 9 Juni 2023",
      selectionProcess: "3 alur seleksi"
    },
    {
      id: 2,
      logo: "https://example.com/logo2.png",
      title: "Beasiswa B",
      quota: 15,
      registrationDate: "1 Juni - 30 Juni 2023",
      selectionProcess: "2 alur seleksi"
    }
    // ... tambahkan data beasiswa lainnya ...
  ];

  return (
    <div className="beasiswa-list">
      {beasiswaData.map((beasiswa) => (
        <div className="beasiswa-item" key={beasiswa.id}>
          <div className="beasiswa-logo">
            <img src={beasiswa.logo} alt="Logo" />
          </div>
          <div className="beasiswa-details">
            <h3 className="beasiswa-title">{beasiswa.title}</h3>
            <div className="beasiswa-info">
              <div className="beasiswa-info-item">
                <svg>...</svg>
                <span className="beasiswa-info-label">Kuota Peserta</span>
                <span className="beasiswa-info-value">{beasiswa.quota}</span>
              </div>
              <div className="beasiswa-info-item">
                <svg>...</svg>
                <span className="beasiswa-info-label">Tanggal Pendaftaran</span>
                <span className="beasiswa-info-value">
                  {beasiswa.registrationDate}
                </span>
              </div>
              <div className="beasiswa-info-item">
                <svg>...</svg>
                <span className="beasiswa-info-label">Alur Seleksi</span>
                <span className="beasiswa-info-value">
                  {beasiswa.selectionProcess}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeasiswaList;
