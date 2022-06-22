import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import commentService from './../../services/comment.service';

function Comments({ id }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onUpdate = (data) => {
        console.log(data);
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center row">
                <div className="col-md-12">
                    <div className="d-flex flex-column comment-section">

                        <div className="bg-white p-2 nth-child-background-color-light">
                            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                            </div>
                            <div className="mt-2">
                                <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="bg-white p-2 nth-child-background-color-light">
                            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                            </div>
                            <div className="mt-2">
                                <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="bg-light p-2 border-radius-15px mt-2">
                            <form onSubmit={handleSubmit(onUpdate)}>
                                <div className="d-flex flex-row align-items-start">
                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                    <textarea
                                        name="commentContent"
                                        className="form-control ml-1 shadow-none textarea"
                                        defaultValue=""
                                        {...register("commentContent", { required: true })}>
                                    </textarea>
                                </div>
                                <div>
                                    {errors.commentContent?.type === 'required' && <div className="invalid-feedback ml-5"><div>Context is required</div></div>}
                                </div>
                                <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none">Post comment</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;
