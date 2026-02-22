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

  <div className="d-flex flex-column flex-md-row  align-items-center justify-content-center gap-3 mb-3 mt-3">
    <button
      className={`btn-toggle ${activeSection === "Skill" ? "active" : ""}`}
      onClick={() => setActiveSection("Skill")}
    >
      Skill
    </button>

    <button
      className={`btn-toggle ${activeSection === "Education" ? "active" : ""}`}
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
