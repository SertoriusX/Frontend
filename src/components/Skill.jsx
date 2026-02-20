import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BackEndConnection } from "../api/BackEndConection";

export default function Skill() {
  const [skill, setSkill] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${BackEndConnection}/get-skill/`)
      .then((res) => setSkill(res.data))
      .catch((err) => console.error(err));
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!Array.isArray(skill) || skill.length === 0)
    return <p>Loading skills...</p>;

  return (
 <div className="row  mt-5">
       <div id="skills" className="container col-7 text-center  ">
      <h1>Skills & Tools</h1>

      <div className="position-relative mt-5 ">

        {/* Left Arrow */}
        <button className="slider-arrow left" onClick={() => scroll("left")}>
          ❮
        </button>

        {/* Horizontal Row */}
        <div className="horizontal-container " ref={scrollRef}>
          {skill.map((s) => (
            <div key={s.id} className="card-wrapper">
              <div className="skill-card shadow p-3">
                <h2>{s.name}</h2>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {s.image_read?.map((image) => (
                    <img
                      key={image.id}
                      src={image.image}
                      className="skill-logo"
                      alt={s.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="slider-arrow right" onClick={() => scroll("right")}>
          ❯
        </button>

      </div>
    </div>
 </div>
  );
}
