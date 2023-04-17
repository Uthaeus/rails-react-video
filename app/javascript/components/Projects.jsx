import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ProjectItem from './projectItem';

function Projects() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/v1/projects/index')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then((response) => {
            setProjects(response);
        })
        .catch(() => navigate('/'));
    }, []);

    const allProjects = projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
    ))

    return (
        <div className='container projects-container'>
            <div className='projects-header'>
                <h2 className='w-100 text-center'>Here are some of my projects</h2>
            </div>
            <div className="row row-cols-3">
                {allProjects}
            </div>
        </div>
    );
}

export default Projects;