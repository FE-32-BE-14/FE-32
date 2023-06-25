import React from "react";
import "./Modis.css";
import Comment from "../components/comment/Comment";
import CommentContextProvider from "../context/CommentContext";
import Sidebar from "../components/Sidebar/Sidebar";

const Beasiswa1 = () => {
  return (
    <>
      <Sidebar>
        <div className="mode">
          <h1>Beasiswa 1</h1>
          <img
            src="https://i.pinimg.com/564x/52/77/c3/5277c3b68319da3f1995f8848c45e45a.jpg"
            alt="Keterangan gambar"
          />
          <h2 className="subtitle">Beasiswa untuk mahasiswa berprestasi</h2>
          <p className="paragraph">
            Jika Anda memiliki pertanyaan mengenai beasiswa ini, jangan ragu
            untuk mengajukannya kepada kami.
          </p>
          <CommentContextProvider>
            <Comment />
          </CommentContextProvider>
        </div>
      </Sidebar>
    </>
  );
};

export default Beasiswa1;
