import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ProjectDetail() {
    const [project, setProject] = useState({});
    const [isloggedIn, setIsLoggedIn] = useState(false);
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

    useEffect(() => {
        fetch('/api/v1/projects/auth')
        .then((response) => {
            if (response.ok) {
                setIsLoggedIn(true);
            }
        })
        .catch(error => {
            console.log('auth', error);
        })
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
                    {isloggedIn && <Link to={`/project/${project.id}/edit`}>Edit Project</Link>}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
