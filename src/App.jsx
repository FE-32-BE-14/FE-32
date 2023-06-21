import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Beasiswa1 from './pages/Beasiswa1.jsx';
import Beasiswa2 from './pages/Beasiswa2.jsx';
import Beasiswa3 from './pages/Beasiswa3.jsx';
import Donasi from './pages/Donasi.jsx';
import PageDonasi from './pages/PageDonasi';
import PagePembayaran from './pages/PagePembayaran';
import PageAcceptPembayaran from './pages/PageAcceptPembayaran';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* masukan endpoint donasi bila layar white screen */}
          <Route path="/donasi" element={<PageDonasi />} />
          <Route path="/pembayaran" element={<PagePembayaran />} />
          <Route path="/accept" element={<PageAcceptPembayaran />} />
          <Route path="/Beasiswa1" element={<Beasiswa1 />} />
          <Route path="/Beasiswa2" element={<Beasiswa2 />} />
          <Route path="/Beasiswa3" element={<Beasiswa3 />} />
          <Route path="/Donasi" element={<Donasi />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
