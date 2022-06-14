import React, { useState, useEffect } from 'react';
import SideBarMemoryCategories from '../../components/memory/side-bar-memory-categories.component';
import DebounceSearch from '../shared/debounce-search.component';
import MemoryCards from './memory-cards.component';

import memoryService from './../../services/memory.service';

const PAGE_SIZE = 8;
const ITEMS_PER_PAGE = 8;

function UserMemories() {
    const [categoryId, setCategoryId] = useState('all');
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [remountComponent, setRemountComponent] = useState(0);

    useEffect(() => {
        getMemories(1);
        setRemountComponent(remountComponent + 1);
    }, [categoryId]);

    const handleCategoryChange = (categoryId) => {
        setCategoryId(categoryId);
    }
 
    const getMemories = (pageNumber, search) => {
        memoryService.userMemories(categoryId, pageNumber, PAGE_SIZE, search)
            .then(response => {
                const { totalCount, memories } = response.data.data;
                setPageCount(Math.ceil(totalCount / ITEMS_PER_PAGE));
                setCurrentItems(memories);
            })
            .catch(e => {
                console.log(e);
            });
    }  

    const handlePageClick = (event) => {
        let currentPage = event.selected + 1;
        getMemories(currentPage);
    };

    function search(e) {
        getMemories(1, e.target.value);
    }

    return (
        <>
            <div className="row">
                <div className='col-md-4 flex-right-auto padding-bottom-zero margin-right-15px padding-top-20px'>
                    <DebounceSearch searchHandler={search} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 padding-top-zero">
                    <SideBarMemoryCategories categoryId={categoryId} handleCategoryChange={handleCategoryChange} />
                </div>
                <div className="col-md-9 padding-top-10px">
                    <MemoryCards 
                        currentItems={currentItems} 
                        handlePageClick={handlePageClick} 
                        pageCount={pageCount} 
                        remountComponent={remountComponent} />
                </div>
            </div>
        </>
    )
}

export default UserMemories;
