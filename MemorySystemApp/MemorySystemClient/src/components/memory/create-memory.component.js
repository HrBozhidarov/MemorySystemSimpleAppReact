import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import memoryService from '../../services/memory.service';

import { toast } from 'react-toastify';

import { CATEGORY_KEYS } from '../../constants/constants';

function buildCategoryOptions() {
    const categoryKeys = Object.keys(CATEGORY_KEYS).filter(c => c !== 'All');

    return categoryKeys.map(k => <option key={CATEGORY_KEYS[k]} value={CATEGORY_KEYS[k]}>{k}</option>);
}

function CreateMemory() {
    const categoryOptions = buildCategoryOptions();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onMemory = (data) => {
        memoryService
            .create(data)
            .then(() => {
                toast.success('Your memory was created successfully');

                navigate('/', { replace: true });
            })
            .catch(err => {
                toast.error(err.response?.data?.errorMessage || err.message);
            });
    }

    return (
        <div className="row mt-5 mb-5">
            <div className="col-md-6 mb-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center default-text py-3"><i className="fa fa-picture-o"></i> Create Memory:</h3>
                        <form onSubmit={handleSubmit(onMemory)}>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select className="form-control" id="category" {...register("type")}>
                                    {categoryOptions}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputTitle">Title</label>
                                <input
                                    name="title"
                                    type="text"
                                    className={`form-control ${errors.title?.type === 'required' && 'is-invalid'}`}
                                    id="inputTitle"
                                    placeholder="Title"
                                    defaultValue=""
                                    {...register("title", { required: true })}></input>
                                {errors.url?.type === 'required' && <div className="invalid-feedback"><div>Title is required</div></div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputUrl">Image Url</label>
                                <input
                                    name="url"
                                    type="text"
                                    className={`form-control ${errors.url?.type === 'required' && 'is-invalid'}`}
                                    id="inputUrl"
                                    placeholder="Url"
                                    defaultValue=""
                                    {...register("url", { required: true })}></input>
                                {errors.url?.type === 'required' && <div className="invalid-feedback"><div>Url is required</div></div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputDescription">Description</label>
                                <textarea name="description"
                                    className="form-control"
                                    id="inputDescription"
                                    placeholder="Description"
                                    defaultValue=""
                                    {...register("description")}>
                                </textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateMemory;
