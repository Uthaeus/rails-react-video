import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProjectForm from "./projectForm";

function ProjectEdit() {
  const [project, setProject] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`/api/v1/show/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.log("projectEdit useEffect", error.message);
      });
  }, []);

  return (
    <div className="container">
      <h1>Edit Project</h1>
      <p>{`project: ${project.title}`}</p>
      <ProjectForm
        mode="edit"
        data={project}
      />
    </div>
  );
}

export default ProjectEdit;
