import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import userService from '../../../services/user.service';

import { toast } from 'react-toastify';

import './create-user.component.css';

function CreateUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onCreate = (data) => {
        userService
            .create(data)
            .then(() => {
                toast.success('Update yours data successfully');

                navigate('/', { replace: true });
            })
            .catch(err => {
                toast.error(err.message);
            });
    }

    return (
        <div className="row mt-5 mb-5">
            <div className="col-md-6 mb-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center default-text py-3"><i className="fa fa-registered"></i> Register:</h3>
                        <form onSubmit={handleSubmit(onCreate)}>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    className={`form-control ${errors.email?.type === 'required' && 'is-invalid'}`}
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
                                    className={`form-control ${errors.userName?.type === 'required' && 'is-invalid'}`}
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
                                    className={`form-control ${errors.password?.type === 'required' && 'is-invalid'}`}
                                    id="inputPassword"
                                    placeholder="Password"
                                    defaultValue=""
                                    {...register("password", { required: true })}></input>
                                {errors.password?.type === 'required' && <div className="invalid-feedback"><div>Password is required</div></div>}
                            </div>
                            <div className="text-center">
                                <button className="btn">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;
