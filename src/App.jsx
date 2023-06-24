import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageDonasi from "./pages/PageDonasi";
import PagePembayaran from "./pages/PagePembayaran";
import PageAcceptPembayaran from "./pages/PageAcceptPembayaran";
import PageTest from "./pages/PageTest";

function App() {
  return (
    <>
      <Routes>
        {/* masukan endpoint donasi bila layar white screen */}
        <Route path="/donasi" element={<PageDonasi />} />
        <Route path="/pembayaran" element={<PagePembayaran />} />
        <Route path="/accept" element={<PageAcceptPembayaran />} />
        <Route path="/test-page" element={<PageTest />} />
      </Routes>
    </>
  );
}

export default App;
