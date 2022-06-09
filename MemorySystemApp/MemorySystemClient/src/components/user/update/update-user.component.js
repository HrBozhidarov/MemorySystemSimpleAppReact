import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

import userService from '../../../services/user.service';

import './update-user.component.css';

function UpdateUser() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    
    const onUpdate = (data) => {
        userService
            .update(data)
            .then(() => {
                toast.success('Update yours data successfully');

                navigate('/', { replace: true });
            })
            .catch(err => {
                toast.error(err.response?.data?.errorMessage || err.message);
            });
    }

    useEffect(() => {
        userService.details()
            .then(user => {
                setValue('email', user.data.data.email);
                setValue('userName', user.data.data.username);
                setValue('profileUrl', user.data.data.profileUrl);
            })
            .catch(err => {
                toast.error(err.response?.data?.errorMessage || err.message);

                navigate('/', { replace: true });
            });
    }, []);

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
                                        className={`form-control ${errors.email?.type === 'required' && 'is-invalid'}`}
                                        id="inputEmail"
                                        placeholder="Email"
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
                                        {...register("profileUrl")}></input>
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
