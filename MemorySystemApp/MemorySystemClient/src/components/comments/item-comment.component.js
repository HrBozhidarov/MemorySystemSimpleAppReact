import React from 'react';

function ItemComment({ content, author, authorImage, publishedOn }) {
    return (
        <div class="bg-white p-2 nth-child-background-color-light">
            <div class="d-flex flex-row user-info"><img class="rounded-circle" src={authorImage} width="40" />
                <div class="d-flex flex-column justify-content-start ml-2">
                    <span class="d-block font-weight-bold name">{author}</span>
                    <span class="date text-black-50">Shared publicly - {publishedOn}</span>
                </div>
            </div>
            <div class="mt-2">
                <p class="comment-text">{content}</p>
            </div>
        </div>
    )
}

export default ItemComment;
