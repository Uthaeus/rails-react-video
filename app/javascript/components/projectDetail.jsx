import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ProjectDetail() {
    const [project, setProject] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/v1/show/${params.id}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then((response) => {
            setProject(response);
        })
        .catch((error) => {
            console.log('projectDetail useEffect', error.message);
            navigate('/projects');
        });
    }, []);

    return (
        <div className="project-detail-container">
            <div className='row'>
                <div className='col-md-7'>
                    <img src={project.thumbnail} alt={project.title} />
                </div>
                <div className='col-md-5'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
