import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  }, []);
  const toggleDark = () => {
    document.body.classList.toggle("dark-mode");

    // Save theme preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-custom px-4">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => navigate("/")}>
          <img src="/TKG.png" width="100" height="50" alt="Logo" />
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navMenu"
        >
          <ul className="navbar-nav gap-3 align-items-center">
            <li>
              <button onClick={toggleDark} className="btn btn-sm">
                🌙
              </button>
            </li>
            <li className="nav-item">
              <a href="#About-my" className="nav-link nav-custom">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link nav-custom">
                Skills & Tools
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" className="nav-link nav-custom">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#Education" className="nav-link nav-custom">
                Education
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
