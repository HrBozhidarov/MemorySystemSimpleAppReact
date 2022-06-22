import React from 'react';

function ItemComment({ content, author, authorImage, publishedOn }) {
    return (
        <div className="bg-white p-2 nth-child-background-color-light">
            <div className="d-flex flex-row user-info"><img className="rounded-circle" src={authorImage} width="40" />
                <div className="d-flex flex-column justify-content-start ml-2">
                    <span className="d-block font-weight-bold name">{author}</span>
                    <span className="date text-black-50">Shared publicly - {publishedOn}</span>
                </div>
            </div>
            <div className="mt-2">
                <p className="comment-text">{content}</p>
            </div>
        </div>
    )
}

export default ItemComment;
