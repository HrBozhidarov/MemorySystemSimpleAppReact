import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

import ItemComment from './item-comment.component';

import { useAuth } from '../../shared/auth-context';

import commentService from './../../services/comment.service';

function Comments({ memoryId }) {
    const userAthContext = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [comments, setComments] = useState([]);

    const commentItems = comments.map(c =>
        <ItemComment key={c.id} content={c.content} author={c.author} authorImage={c.authorImage} publishedOn={c.publishedOn} />);

    useEffect(async () => {
        try {
            const response = await commentService.commentsByMemoryId(memoryId);
            const data = response.data.data;

            if (data && data.length) {
                setComments(prev => [...prev, ...data]);
            }
        } catch (err) {
            toast.error(err.response?.data?.errorMessage || err.message);
        }
    }, []);

    const onCreate = async (value) => {
        try {
            const responseCreateComment = await commentService.createComment(id, value);
            const id = responseCreateComment.data.data;

            const responseGetCommentById = await commentService.getCommentById(id);
            const newAddedComment = responseGetCommentById.data.data;
            // Check for exists comment
            setComments(prev => [...prev, newAddedComment]);
        }
        catch (err) {
            toast.error(err.response?.data?.errorMessage || err.message);
        }
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center row">
                <div className="col-md-12">
                    <div className="d-flex flex-column comment-section">
                        {commentItems}
                        <div className="bg-light p-2 border-radius-15px mt-2">
                            <form onSubmit={handleSubmit(onCreate)}>
                                <div className="d-flex flex-row align-items-start">
                                    <img className="rounded-circle" src={userAthContext.user.profileUrl} width="40" />
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
