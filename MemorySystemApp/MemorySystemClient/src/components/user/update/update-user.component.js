import React from 'react';
import { useForm } from "react-hook-form";

import './update-user.component.css';

function onUpdate(data) {
    console.log(data);
}

function UpdateUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="col-md-6 mb-4 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center default-text py-3"><i className="fa fa-registered"></i> Update:</h3>
                            <form onSubmit={handleSubmit(onUpdate)}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        className={`form-control ${errors.email?.type === 'required' &&  'is-invalid'}`}
                                        id="inputEmail"
                                        placeholder="Email"
                                        defaultValue=""
                                        {...register("email", { required: true })}></input>
                                    {errors.email?.type === 'required' && <div className="invalid-feedback"><div>Email is required</div></div>}
                                </div>
                                <div className="form-group">
                                        <label htmlFor="inputuserName">User name</label>
                                        <input
                                            name="userName"
                                            type="text"
                                            className={`form-control ${errors.userName?.type === 'required' &&  'is-invalid'}`}
                                            id="inputuserName"
                                            placeholder="User Name"
                                            defaultValue=""
                                            {...register("userName", { required: true })}></input>
                                        {errors.userName?.type === 'required' && <div className="invalid-feedback"><div>User name is required</div></div>}
                                </div>
                                <div className="form-group">
                                        <label htmlFor="inputProfileUrl">Picture</label>
                                        <input
                                            name="profileUrl"
                                            type="text"
                                            className="form-control" 
                                            id="inputProfileUrl"
                                            placeholder="Profile Picture"
                                            defaultValue=""
                                            {...register("profileUrl")}></input>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input
                                            name="password"
                                            type="text"
                                            className={`form-control ${errors.password?.type === 'required' &&  'is-invalid'}`}
                                            id="inputPassword"
                                            placeholder="Password"
                                            defaultValue=""
                                            {...register("password", { required: true })}></input>
                                        {errors.password?.type === 'required' && <div className="invalid-feedback"><div>Password is required</div></div>}
                                </div>
                                <div className="text-center">
                                    <button className="btn">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateUser;