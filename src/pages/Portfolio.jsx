import React, { useState } from 'react';
import PersonInfo from '../components/PersonInfo';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import Education from '../components/Education';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Skill");

  return (
    <div className="container-fluid ">

      <div className="row">

        <div className="col-12 col-md-7">
          <PersonInfo />
        </div>

        <div className="col-12 col-md-5">

          <div className="d-flex justify-content-center mb-3 gap-3">
            <button
              className={`btn ${activeSection === "Skill" ? "btn-custom-activate" : "btn-custom-s"}`}
              onClick={() => setActiveSection("Skill")}
            >
              Skill
            </button>

            <button
              className={`btn  ${activeSection === "Education" ? "btn-custom-activate" : "btn-custom-s"}`}
              onClick={() => setActiveSection("Education")}
            >
              Education
            </button>
          </div>

          {activeSection === "Skill" ? <Skill /> : <Education />}

        </div>
      </div>

      <div >
        <Projects />
      </div>

    </div>
  );
}
