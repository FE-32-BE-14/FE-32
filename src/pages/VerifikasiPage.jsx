// File: VerifikasiPage.js
import React, { useContext } from 'react';
import { VerifikasiContext } from '../contexts/VerifikasiContext';

const VerifikasiPage = () => {
  const { isFileUploaded } = useContext(VerifikasiContext);

  return (
    <div>
      {isFileUploaded ? (
        <div>
          <h2>Selamat! File berhasil diunggah!</h2>
          <p>Ini adalah halaman verifikasi.</p>
        </div>
      ) : (
        <h2>Silakan unggah file terlebih dahulu untuk melihat halaman verifikasi.</h2>
      )}
    </div>
  );
};

export default VerifikasiPage;
