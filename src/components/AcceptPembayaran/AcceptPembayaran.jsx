import "./AcceptPembayaran.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useGlobal } from "../../context/GlobalContext";

function AcceptPembayaran() {
  const {email, setEmail} = useGlobal("");
  const {number, setNumber} = useGlobal("");
  const {username, setUsername} = useGlobal("")

  const { numberInput } = useGlobal();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/\D/g, "");
    setNumber(cleanedValue);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || number === "" || username === "")
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
      } else if(username === ""){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Masukan Nama kamu",
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
            window.location.href = "/donasi";
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
              <p className="valueNominal">Rp. {numberInput}</p>
              <input type="text" className="valueUsername" name="username" id="username" placeholder="Nama lengkap" value={username} onChange={handleUsernameChange}/>
              <input type="text" value={email} onChange={handleEmailChange} className="inputEmail" name="email" id="email" placeholder="Alamat Email" />
              <input type="text" value={number} onChange={handleNumberChange} className="inputEmail" name="rekening" id="rekening" placeholder="No Rekening" />
              <div id="keiinginanUser">
                <p>Sembunyikan nama saya (donasi sebagai anonim)</p>
                <Form.Check type="switch" id="custom-switch" className="check" />
              </div>
              <p className="berdoa">Berdoa di Donasi ini (opsional)</p>
              <textarea className="textbox" placeholder="Tulis doa untuk penggalang dana atau dirimu sendiri  di sini. Biar doa kamu bisa  di lihat dan diamini oleh orang baik lainnya" />
              <div className="btnFinish">
                <button type="submit" className="btnFinish">
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
