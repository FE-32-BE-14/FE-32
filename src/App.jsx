import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { VerifikasiProvider } from './contexts/VerifikasiContext';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import VerifikasiPage from './components/VerifikasiList';
import VerifikasiSuccess from './components/VerifikasiSuccess';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <VerifikasiProvider>
          <Routes>
            <Route
              path="/"
              element={
                <AuthContext.Consumer>
                  {({ isLoggedIn }) =>
                    isLoggedIn ? <VerifikasiPage /> : <Navigate to="/login" replace={true} />
                  }
                </AuthContext.Consumer>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verifikasi" element={<VerifikasiPage />} />
            <Route path="/verifikasi-success" element={<VerifikasiSuccess />} />
          </Routes>
        </VerifikasiProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
