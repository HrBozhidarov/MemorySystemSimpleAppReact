import React, { useState, useEffect, useCallback } from 'react';
import SideBarMemoryCategories from '../../components/memory/side-bar-memory-categories.component';
import DebounceSearch from '../shared/search-input.component';
import MemoryCards from './memory-cards.component';

import { toast } from 'react-toastify';

import debounce from 'lodash.debounce';

import memoryService from './../../services/memory.service';

const PAGE_SIZE = 8;
const ITEMS_PER_PAGE = 8;

function UserMemories({ isForALL }) {
    const [categoryId, setCategoryId] = useState('all');
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [remountComponent, setRemountComponent] = useState(0);
    const [clearSearchInput, setclearSearchInput] = useState(false);

    const search = useCallback((currentValue) => {
        getMemories(1, currentValue);
    })

    const searchDebounce = useCallback(debounce(search, 500));

    const handleCategoryChange = useCallback((categoryId) => {
        setclearSearchInput(prev => !prev);
        setCategoryId(categoryId);
    })

    const getMemories = useCallback((pageNumber, searchTerm) => {
        const service = isForALL
            ? memoryService.allMemories(categoryId, pageNumber, PAGE_SIZE, searchTerm)
            : memoryService.userMemories(categoryId, pageNumber, PAGE_SIZE, searchTerm);

        service
            .then(response => {
                const { totalCount, memories } = response.data.data;
                setPageCount(Math.ceil(totalCount / ITEMS_PER_PAGE));
                setCurrentItems(memories);
            })
            .catch(err => {
                toast.error(err.response?.data?.errorMessage || err.message);
            });
    })

    const handlePageClick = useCallback((event) => {
        let currentPage = event.selected + 1;
        getMemories(currentPage);
    });

    useEffect(() => {
        getMemories(1);
        setRemountComponent(remountComponent + 1);

        return () => searchDebounce.cancel();
    }, [categoryId]);

    return (
        <>
            <div className="row">
                <div className='col-md-4 flex-right-auto padding-bottom-zero margin-right-15px padding-top-20px'>
                    <DebounceSearch onChange={searchDebounce} clearInput={clearSearchInput} />
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
