import React from 'react';
import { useForm } from "react-hook-form";

/* function onRegister(data) {
    console.log(data);
} */

function CreateUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onRegister = data => console.log(data);

    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="col-md-6 mb-4 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center default-text py-3"><i className="fa fa-registered"></i> Register:</h3>
                            <form onSubmit={handleSubmit(onRegister)}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        className={`form-control`}
                                        id="inputEmail"
                                        placeholder="Email"
                                        defaultValue=""
                                        {...register("email", { required: true, minLength: 20 })}></input>
                                        <span>{errors.email?.type === 'required' && <span>This field is required</span>}</span>
                                        <span>{errors.email?.type === 'minLength' && <span>This FFF</span>}</span>
                                    {/*                      [ngclassName]="{'is-invalid': submitted && f.email.errors }">
                                    <div *ngIf="submitted && f.email.errors" 
                             className="invalid-feedback">
                                    <div *ngIf="f.email.errors.required">Email is required</div> */}
                                </div>
                                {/*   </div> */}
                                {/*                     <div className="form-group">
                        <label for="inputUsername">Username</label>
                        <input formControlName="username"
                            type="text"
                            className="form-control"
                            id="inputUsername"
                            placeholder="Username"
                                [ngclassName]="{'is-invalid': submitted && f.username.errors }">
                        <div *ngIf="submitted && f.username.errors" 
                             className="invalid-feedback">
                        <div *ngIf="f.username.errors.required">Username is required</div>
                </div>
            </div>
            <div className="form-group">
                <label for="inputProfileUrl">Profile Picture</label>
                <input formControlName="profileUrl"
                    type="text"
                    className="form-control"
                    id="inputProfileUrl"
                    placeholder="Profile Picture">
            </div>
            <div className="form-group">
                <label for="inputPassword">Password</label>
                <input formControlName="password"
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                                   [ngclassName]="{'is-invalid': submitted && f.password.errors }">
                <div *ngIf="submitted && f.password.errors" 
                                 className="invalid-feedback">
                <div *ngIf="f.password.errors.required">Password is required</div>
            <div *ngIf="f.password.errors.minlength">Password must be at least 3 characters</div>
                            </div >
                        </div > */}
                                <div className="text-center">
                                    <button className="btn">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateUser;
