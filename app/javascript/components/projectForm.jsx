import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";


function ProjectForm({ mode, data }) {
    const [isLoading, setIsLoading] = useState(true);
    const { register, handleSubmit, reset, errors } = useForm();

    useEffect(() => {
        if (mode === "edit") {
            reset({
                title: data.title,
                description: data.description,
                thumbnail: data.thumbnail,
                video_url: data.video_url,
            });
        }
        setIsLoading(false);
        console.log('useEffect')
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
    isLoading ? <p>Loading...</p> 
        : (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type='text' {...register('title', { required: true })} className="form-control" />
                {errors?.title && <span>This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea {...register('description', { required: true })} className="form-control" rows={6} />
                {errors?.description && <span>This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail</label>
                <input type='text' {...register('thumbnail', { required: true })} className="form-control" />
                {errors?.thumbnail && <span>This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="video_url">Video URL</label>
                <input type='text' {...register('video_url', { required: true })} className="form-control" />
                {errors?.video_url && <span>This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
  );
}

export default ProjectForm;