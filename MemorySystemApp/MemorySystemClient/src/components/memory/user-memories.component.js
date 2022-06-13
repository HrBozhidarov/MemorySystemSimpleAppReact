import React, { useState } from 'react';
import SideBarMemoryCategories from '../../components/memory/side-bar-memory-categories.component';
import DebounceSearch from '../shared/debounce-search.component';
import MemoryCards from './memory-cards.component';

function UserMemories() {
    const [categoryId, setCategoryId] = useState('all');

    const handleCategoryChange = (categoryId) => {
        setCategoryId(categoryId);
    }

    function test() {

    }

    return (
        <>
            <div className="row">
                <div className='col-md-4 flex-right-auto padding-bottom-zero margin-right-15px padding-top-20px'>
                    <DebounceSearch searchHandler={test} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 padding-top-zero">
                    <SideBarMemoryCategories categoryId={categoryId} handleCategoryChange={handleCategoryChange} />
                </div>
                <div className="col-md-9 padding-top-10px">
                    <MemoryCards category={categoryId} itemsPerPage={8} />
                </div>
            </div>
        </>
    )
}

export default UserMemories;
