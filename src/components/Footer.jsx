import React from "react";

export default function Footer() {
  return (
    <footer className="footer-custom text-white py-4 mt-5 bg-dark">
      <div className="container text-center">
        <h5 className="mb-3 fw-light">Connect with me</h5>

        <div className="d-flex align-items-center justify-content-center gap-4">
          <a
            href="https://github.com/SertoriusX"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white"
          >
            <i className="bi bi-github fs-3"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/srtg96/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white"
          >
            <i className="bi bi-linkedin fs-3"></i>
          </a>
        </div>

        <p className="mt-3 mb-0 small opacity-75">
          © 2026 Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
