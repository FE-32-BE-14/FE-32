import { useState } from "react";
import "./AcceptPembayaran.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function AcceptPembayaran() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/\D/g, "");
    setNumber(cleanedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || number === "")
      if (!validateEmail(email)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Masukan Email dengan benar",
        });
      } else if (number === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Masukan No Virtaul Bank atau E-wallet",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tolong masukan Email & Nama",
        });
      }
    else {
      Swal.fire({
        title: "Apakah kamu yakin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Terima Kasih!", "Donasi yang anda berikan sudah berhasil", "success").then(() => {
            window.location.href = "/";
          });
        }
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div id="utama">
      <div id="pmbks">
        <div id="pmbksKedua">
          <div id="pmbksKetiga">
            <Form onSubmit={handleSubmit}>
              <p>Isi nominal Donasi</p>
              <p className="valueNominal">Maintance</p>
              <input type="text" className="valueUsername" name="username" id="username" placeholder="Nama lengkap" />
              <input type="text" value={email} onChange={handleEmailChange} className="inputEmail" name="email" id="email" placeholder="Alamat Email" />
              <input type="text" value={number} onChange={handleNumberChange} className="inputEmail" name="rekening" id="rekening" placeholder="No Rekening" />
              <div id="keiinginanUser">
                <p>Sembunyikan nama saya (donasi sebagai anonim)</p>
                <Form.Check type="switch" id="custom-switch" className="check" />
              </div>
              <p className="berdoa">Berdoa di Donasi ini (opsional)</p>
              <textarea className="textbox" placeholder="Tulis doa untuk penggalang dana atau dirimu sendiri  di sini. Biar doa kamu bisa  di lihat dan diamini oleh orang baik lainnya" />
              <div className="btnFinish">
                <button type="submit" style={{ color: "white" }} className="acceptBtn">
                  Selesaikan Donasi
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptPembayaran;
