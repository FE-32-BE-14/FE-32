import React from 'react';

function RegisterPage() {
  const session = sessionStorage.getItem('login');
  if (session) {
    window.location.href = 'home.html';
  }

  return (
    <div style={{ backgroundColor: 'rgb(242, 251, 255)' }}>
      <div className="container-fluid p-0 min-vh-100 align-items-center d-flex">
        <div className="card">
          <h3 className="card-header text-secondary text-center">Register</h3>
          <div className="card-body">
            <form id="form">
              <label className="text-secondary fst-italic mb-1" htmlFor="username">Username**</label>
              <input type="text" className="form-control mb-3" id="username" name="username" placeholder="Username" />
              <p className="error-text" id="error-username"></p>
              <label className="text-secondary fst-italic mb-1" htmlFor="email">Email**</label>
              <input type="email" className="form-control mb-3" id="email" name="email" placeholder="Email" />
              <p className="error-text" id="error-email"></p>
              <label className="text-secondary fst-italic mb-1" htmlFor="password">Password**</label>
              <input type="text" className="form-control mb-3" id="password" name="password" placeholder="Password" />
              <p className="error-text" id="error-password"></p>
              <button type="submit" className="btn btn-primary w-100 my-2">Registrasi</button>
              <span style={{ fontSize: '12px' }}> Apakah sudah punya akun?<a href="./index.html" className="text-decoration-none">Login</a></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
