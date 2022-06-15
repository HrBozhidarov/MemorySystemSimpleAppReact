import React from 'react';
import ReactPaginate from 'react-paginate';

import ItemMemoryCard from '../memory/item-memory-card.component';

function MemoryCards({ currentItems, handlePageClick, pageCount, remountComponent }) {
    return (
        <div key={remountComponent}>
            <div className="container">
                <div className="row">
                    {currentItems.map(i =>
                        <ItemMemoryCard
                            key={i.id}
                            memoryId={i.id}
                            ownerProfilePicture={i.ownerProfilePicture}
                            pictureUrl={i.url}
                            title={i.title}
                            owner={i.owner}
                            isLikeFromCurrentUser={i.isLikedFromCurrentUser}
                            likes={i.likes} />)}
                </div>
                <div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >>"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="<< previous"
                        pageLinkClassName="text-decoration-none"
                        nextLinkClassName="text-decoration-none"
                        previousLinkClassName="text-decoration-none"
                        pageClassName="list-style-type-none"
                        previousClassName="list-style-type-none"
                        nextClassName="list-style-type-none"
                        activeLinkClassName="test"
                        renderOnZeroPageCount={null} />
                </div>
            </div>
        </div>
    )
}

export default MemoryCards;
