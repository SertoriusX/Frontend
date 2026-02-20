import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackEndConnection } from "../api/BackEndConection";

export default function Education() {
  const[education,setEducation]=useState([])

  useEffect(()=>{
    axios.get(`${BackEndConnection}/get-education/`).then((res)=>{setEducation(res.data)}).catch((err)=>{console.error(err);
    })
  },[])
  return (
    <div id="Education" className="container my-5">
      <h1 className="text-center mb-4">Education</h1>

      <div className="row justify-content-center">



        {education.length===0?(
          <h1>Loading ...</h1>
        ):(education.map((edu)=>(

              <div key={edu.id} className="col-md-6 mb-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">{edu.title}</h5>
              <h6 className="card-subtitle mb-2">{edu.name_of_School}</h6>
              <p className="card-text">
                <strong>{edu.duration}</strong>
              </p>
            </div>
          </div>
        </div>
        )))}
    

  
      </div>
    </div>
  );
}
