import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BackEndConnection } from "../api/BackEndConection";

export default function Projects() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`${BackEndConnection}/see-project/`)
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div id="Projects" className="container-fluid mt-5 mb-5 p-5">
            <h1 className="text-center mb-5">Projects</h1>

            {data.length === 0 ? (
                <p className="text-center">Loading projects...</p>
            ) : (
                <div className="row g-4 ">
                    {data.map((port) => (
                        <div
                            key={port.id}
                            className="col-12 col-sm-6 col-md-4 d-flex"
                        >
                            <div className="card shadow-sm flex-fill 18rem; hover-shadow">
                                <img
                                    src={port.image_project}
                                    className="card-img-top"
                                    alt={port.title}
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{port.title}</h5>


                                    {port.tecnologias_read.length > 0 && (
                                        <div className="mb-3">
                                            <h6 className="mb-1">Technologies:</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {port.tecnologias_read.map((tech) => (
                                                    <span
                                                        key={tech.id}
                                                        className="badge bg-primary text-white"
                                                    >
                                                        {tech.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="d-flex justify-content-around align-items-center mt-auto gap-2">
                                        {port.git_hub && (
                                            <a
                                                href={port.git_hub}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-sm flex-grow-1"
                                                style={{ background: "linear-gradient(90deg, #4e73df, #1c1f4a)", border: "none" }}
                                            >
                                                GitHub
                                            </a>
                                        )}

                                        {port.live_demo && (
                                            <a
                                                href={port.live_demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-success btn-sm flex-grow-1"
                                                style={{ background: "linear-gradient(90deg, #28a745, #218838)", border: "none" }}
                                            >
                                                Demo
                                            </a>
                                        )}

                                        <button
                                            onClick={() => navigate(`/projectDetail/${port.id}`)}
                                            className="btn btn-outline-secondary btn-sm flex-grow-1"
                                            style={{ borderRadius: "50px" }}
                                        >
                                            See more
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
