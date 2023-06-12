import React from 'react';

function LoginPage() {
  const session = sessionStorage.getItem('login');
  if (session) {
    window.location.href = 'home.html';
  }

  return (
    <div style={{ backgroundColor: 'rgb(242, 251, 255)' }}>
      <div className="container-fluid p-0 min-vh-100 align-items-center d-flex">
        <div className="card">
          <h3 className="card-header text-secondary text-center">Login</h3>
          <div className="card-body">
            <form id="form">
              <label className="text-secondary fst-italic mb-1" htmlFor="username">Username**</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="Username" />
              <p className="error-text mt-1" id="error-username"></p>
              <label className="text-secondary fst-italic mb-1" htmlFor="password">Password**</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
              <p className="error-text mt-1" id="error-password"></p>
              <button type="submit" className="btn btn-primary w-100 my-2">Login</button>
              <span style={{ fontSize: '12px' }}> Apakah belum punya akun?<a href="./register.html" className="text-decoration-none">Register</a></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
