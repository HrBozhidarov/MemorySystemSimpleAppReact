import React, { useState } from 'react';
import SideBarMemoryCategories from '../../components/memory/side-bar-memory-categories.component';
import MemoryCards from './memory-cards.component';

function UserMemories() {
    const [categoryId, setCategoryId] = useState('all');

    const handleCategoryChange = (categoryId) => {
        setCategoryId(categoryId);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <SideBarMemoryCategories categoryId={categoryId} handleCategoryChange={handleCategoryChange} />
            </div>
            <div className="col-md-9">
               <MemoryCards category={categoryId} itemsPerPage={8} />
            </div>
        </div>       
    )
}

export default UserMemories;
