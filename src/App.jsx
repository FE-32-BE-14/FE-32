import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PageDonasi from "./pages/PageDonasi"
import PagePembayaran from "./pages/PagePembayaran"
import PageAcceptPembayaran from "./pages/PageAcceptPembayaran"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<PageDonasi/>}/>
        <Route path="/pembayaran" element={<PagePembayaran/>}/>
        <Route path="/accept" element={<PageAcceptPembayaran/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
