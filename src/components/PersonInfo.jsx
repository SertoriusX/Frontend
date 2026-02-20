import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackEndConnection } from "../api/BackEndConection";

export default function PersonInfo() {
  const [personInfo, setPersonInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${BackEndConnection}/get-person/`)
      .then((res) => {
        setPersonInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container py-5">
      {personInfo.length === 0 ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        personInfo.map((person) => (
          <div key={person.id} className="row align-items-center justify-content-center g-4">
            
            {/* TEXT SECTION */}
            <div
              id="About-my"
              className="col-12 col-md-7 d-flex flex-column gap-3 order-2 order-md-1"
            >
              <h1 className="text-center text-md-start">
                {person.first_name} {person.second_name} {person.last_name}
              </h1>

              <p className="border border-primary p-3 text-center text-md-start">
                {person.descripcion}
              </p>

              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-4">
                <a
                  href="https://github.com/SertoriusX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-github fs-3"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/srtg96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
              </div>

              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href="https://drive.google.com/file/d/1K_oIC7IHZTvh8fgln6VdU7KNRIiwD19D/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-pill px-4"
                >
                  View CV
                </a>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="col-12 col-md-4 d-flex justify-content-center order-1 order-md-2">
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  aspectRatio: "1 / 1",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src={person.image_person}
                  alt="profile"
                  className="rounded-circle img-fluid"
                  style={{
                    width: "90%",
                    height: "90%",
                    objectFit: "cover",
                    objectPosition: "0% 5%",
                  }}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
