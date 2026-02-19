import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BackEndConnection } from '../api/BackEndConection'

export default function PersonInfo() {
  const [personInfo, setPersonInfo] = useState([])
  useEffect(() => {
    axios.get(`${BackEndConnection}/get-person/`).then((res) => { setPersonInfo(res.data) }).catch((err) => {
      console.error(err);
      
    })
  }, [])
  return (
    <div className="container-fluid">
      {personInfo.length === 0 ? (
        <h1>Loading ...</h1>
      ) : (personInfo.map((person) => (
        <div key={person.id} className="row justify-content-center col-12 p-5">

          <div
            id="About-my"
            className="col-12 col-md-7 d-flex flex-column py-5 gap-3 order-2 order-md-1"
          >



            <h1 className="w-100 text-start">
               {person.first_name} {person.second_name} {person.last_name}
            </h1>

            <p className="w-100   p-3  mt-md-5">
              {person.descripcion}
            </p>

            <div className="d-flex align-items-center justify-content-center gap-4">
              <a
                href="https://github.com/SertoriusX"
                target="_blan"
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

            <div className="d-flex justify-content-start gap-2">
              <a
                href={`${BackEndConnection}/person/download-cv/${person.id}/`}
                className="btn btn-primary btn-custom w-50 rounded-pill p-3 mt-md-5"
              >
                Download CV
              </a>


 <a
                href={`${BackEndConnection}/person/download-cv/${person.id}/`}
                className="btn btn-primary btn-custom w-50 rounded-pill p-3 mt-md-5"
              >
                View CV
              </a>

            </div>
          </div>

          <div
            className="border-0 col-12 col-md-4 align-self-center mb-3 d-flex justify-content-center align-items-center rounded-circle order-1 order-md-2"
            style={{
              width: "350px",
              height: "360px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >

            <img
              src={person.image_person}
              alt="tkg"
              className="rounded-circle shadow-lg"
              style={{
                width: "330px",
                height: "330px",
                objectFit: "cover",
                objectPosition: "0% 5%",
              }}
            />
          </div>

        </div>
      )))}
    </div>
  )
}
