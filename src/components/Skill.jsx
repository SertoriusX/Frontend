import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackEndConnection } from "../api/BackEndConection";

export default function Skill() {
    const [skill, setSkill] = useState([])
    useEffect(() => {
        axios.get(`${BackEndConnection}/get-skill/`).then((res) => { setSkill(res.data) }).catch((err) => {
            console.error(err);
        })
    }, [])

    return (
        <div id="skills" className="container-fluid text-center p-5">
            <h1>Skills & Tools</h1>
            <div className="row gap-4 justify-content-center col-12 p-5">

                {skill.length === 0 ? (
                    <h1>Loading ...</h1>
                ) : (skill.map((s) => (

                    <div key={s.id} className="col-12 col-md-3 shadow p-3 my-first">
                        <h2>{s.name}</h2>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            {s.image_read.map((image) => (
                                <img src={image.image} className="skill-logo" alt={s.name} />

                            ))}
                        </div>
                    </div>
                )))}




            </div>
        </div>
    );
}
