import React from "react";
import { Link } from "react-router-dom";

function ProjectItem({project}) {
    return (
        <div className="project-item-wrapper col">
            <img src={project.thumbnail} alt={project.title} />
            <h1><Link to={`/project/${project.id}`}>{project.title}</Link></h1>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectItem;