import React, { useState, useEffect } from "react";



function ProjectForm({ mode, data }) {
    const [formState, setFormState] = useState({
        title: "my title",
        description: "",
        thumbnail: "",
        video_url: ""
    });

    useEffect(() => {
        if (mode === "edit") {
            
            setFormState({
                title: data.title,
                description: data.description,
                thumbnail: data.thumbnail,
                video_url: data.video_url
            });
        }
        console.log('useEffect')
    }, []);

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={submitHandler}>
        <p>here: {mode}</p>
        <p>title: {formState.title}</p>
        <p>description: {data.description}</p>
        <p>thumbnail: {data.thumbnail}</p>
        <p>video_url: {data.video_url}</p>
        <div className="form-group">
            <label htmlFor="projectTitle">Project Title</label>
            <input type="text" id='projectTitle' className='form-control' value={formState.title} onChange={inputChangeHandler} />
        </div>

        <div className="form-group">
            <label htmlFor="projectDescription">Project Description</label>
            <textarea id='projectDescription' className='form-control' value={formState.description} onChange={inputChangeHandler} rows={6} />
        </div>

        <div className="form-group">
            <label htmlFor="projectThumbnail">Project Thumbnail</label>
            <input type="text" id='projectThumbnail' className='form-control' value={formState.thumbnail} onChange={inputChangeHandler} />
        </div>

        <div className="form-group">
            <label htmlFor="projectVideoUrl">Project Video URL</label>
            <input type="text" id='projectVideoUrl' className='form-control' value={formState.video_url} onChange={inputChangeHandler} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ProjectForm;