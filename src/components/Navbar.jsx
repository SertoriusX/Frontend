import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
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
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav gap-3 align-items-center">
            <li>
              <button onClick={toggleDark} className="btn btn-sm">
                {isDark ? "☀️" : "🌙"}
              </button>
            </li>

        

        

            <li className="nav-item">
              <a href="#Projects" className="nav-link nav-custom">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="tel:+1234567890" className="nav-link nav-custom">
                📞 +34 642171377
              </a>
            </li>
            
            <li className="nav-item">
              <a href="mailto:yourmail@gmail.com" className="nav-link nav-custom">
                ✉️ tsvetan.georgiev891@gmail.com
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
