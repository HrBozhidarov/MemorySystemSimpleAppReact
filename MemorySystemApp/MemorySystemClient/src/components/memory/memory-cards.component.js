import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import ItemMemoryCard from '../memory/item-memory-card.component';

import memoryService from './../../services/memory.service';

const PAGE_SIZE = 8;

function MemoryCards({ category, itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [remountComponent, setRemountComponent] = useState(0);

    const getMemories = (pageNumber) => {
        memoryService.userMemories(category, pageNumber, PAGE_SIZE)
            .then(response => {
                const { totalCount, memories } = response.data.data;
                setPageCount(Math.ceil(totalCount / itemsPerPage));
                setCurrentItems(memories);
            })
            .catch(e => {
                console.log(e);
            });
    }
    
    useEffect(() => {
        getMemories(1);
        setRemountComponent(remountComponent + 1);
    }, [category]);

    const handlePageClick = (event) => {
        let currentPage = event.selected + 1;
        getMemories(currentPage);
    };

    return (
        <div key={remountComponent} className="section">
            <div className="container">
                <div className="row">
                    {currentItems.map(i =>
                        <ItemMemoryCard
                            key={i.id}
                            ownerProfilePicture={i.ownerProfilePicture}
                            pictureUrl={i.url}
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
