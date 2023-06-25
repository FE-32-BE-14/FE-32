import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { VerifikasiProvider } from './context/VerifikasiContext';
import LoginPage from './components/Login-Verifikasi/Login';
import RegisterPage from './components/Login-Verifikasi/Register';
import VerifikasiSuccess from './components/Login-Verifikasi/VerifikasiSuccess';
import PageDonasi from "./pages/PageDonasi";
import PagePembayaran from "./pages/PagePembayaran";
import AcceptPembayaran from './components/AcceptPembayaran/AcceptPembayaran';
import VerifikasiPage from './pages/VerifikasiPage';

const App = () => {
  return (
    <AuthProvider>
      <VerifikasiProvider>
        <Routes>
          <Route
            path="/"
            element={
              <AuthContext.Consumer>
                {({ isLoggedIn }) =>
                  isLoggedIn ? <PageDonasi /> : <Navigate to="/login" replace={true} />
                }
              </AuthContext.Consumer>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verifikasi" element={<VerifikasiPage />} />
          <Route path="/verifikasi-success" element={<VerifikasiSuccess />} />
          <Route path="/pembayaran" element={<PagePembayaran />} />
          <Route path="/accept" element={<AcceptPembayaran />} />
          <Route path="/donasi" element={<PageDonasi />} />
        </Routes>
      </VerifikasiProvider>
    </AuthProvider>
  );
};

export default App;
