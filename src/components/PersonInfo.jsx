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
      <div className=" mt-5">
        {personInfo.length === 0 ? (
          <h1>Loading ...</h1>
        ) : (personInfo.map((person) => (
          <div key={person.id} className="row justify-content-center gap-5 ">
            <div className='col-12 col-md-4 d-flex flex-column   mt-3'>
   <div
              className=" border border-primary col-12 col-md-2    mb-3 d-flex justify-content-center align-items-center rounded-circle order-1 order-md-1"
              style={{
                width: "250px",
                height: "260px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
            >

              <img
                src={person.image_person}
                alt="tkg"
                className="rounded-circle shadow-lg "
                style={{
                  width: "230px",
                  height: "230px",
                  objectFit: "cover",
                  objectPosition: "0% 5%",
                }}
                
              />
              </div>
              <h3 className="text-center order-2 ">
                {person.first_name} {person.second_name} {person.last_name}
              </h3>
                            <h4 className=' order-2 text-center bold'>Software Developer</h4>

            </div>
            
              
            <div
              id="About-my"
              className="col-12 col-md-7 mt-4 d-flex flex-column text-center "
            >




              <p className="mt-5">
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

              <div className="d-flex justify-content-center gap-2">
               

                <a
                  href={person.cv_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-custom w-50 rounded-pill p-3 mt-md-5"
                >
                  View CV
                </a>
              </div>
            </div>

         

          </div>
        )))}
      </div>
    )
  }
