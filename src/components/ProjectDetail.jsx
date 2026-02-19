import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackEndConnection } from "../api/BackEndConection";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState(null); 

  useEffect(() => {
    axios
      .get(`${BackEndConnection}/see-project/${id}`)
      .then((res) => {
        setData(res.data);
        if (res.data.images_read?.length > 0) setMainImage(res.data.images_read[0].image);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) return <p className="text-center mt-5">Loading project...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-3">
          {mainImage ? (
            <img
              src={mainImage}
              alt={data.title}
              className="img-fluid rounded mb-3"
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
          ) : (
            <p>No images available</p>
          )}

          {data.images_read?.length > 1 && (
            <div className="d-flex flex-wrap gap-2">
              {data.images_read.map((img) => (
                <img
                  key={img.id}
                  src={img.image}
                  alt={data.title}
                  className="img-thumbnail"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    cursor: "pointer",
                    border: mainImage === img.image ? "2px solid #0d6efd" : "1px solid #dee2e6"
                  }}
                  onClick={() => setMainImage(img.image)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="col-md-6">
          <h2>{data.title}</h2>
          <p>{data.description}</p>

          {data.tecnologias_read?.length > 0 && (
            <div className="mb-3">
              <h5>Technologies:</h5>
              <div className="d-flex flex-wrap gap-2">
                {data.tecnologias_read.map((tech) => (
                  <span key={tech.id} className="badge bg-primary">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {data.git_hub && (
            <a
              href={data.git_hub}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark mt-3"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
