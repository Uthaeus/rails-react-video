import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ProjectItem from './projectItem';

function Projects() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [isloggedIn, setIsLoggedIn] = useState(false);

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

    const allProjects = projects.map((project) => (
        <ProjectItem key={project.id} project={project} loggedIn={isloggedIn} />
    ))

    return (
        <div className='container projects-container'>
            <div className='projects-header'>
                <h2 className='w-100 text-center'>Here are some of my projects</h2>
                <p>{isloggedIn && <Link to='/projects/new'>Create New Project</Link>}</p>
            </div>
            <div className="row row-cols-2">
                {allProjects}
            </div>
        </div>
    );
}

export default Projects;