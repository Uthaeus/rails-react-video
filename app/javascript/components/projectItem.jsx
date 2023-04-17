import React from "react";

function ProjectItem({project}) {
    return (
        <div className="project-item-wrapper col">
            <img src={project.thumbnail} alt={project.title} />
            <h1>{project.title}Title</h1>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectItem;