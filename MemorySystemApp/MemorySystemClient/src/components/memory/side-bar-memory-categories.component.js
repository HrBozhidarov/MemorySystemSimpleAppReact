import React, { useState } from 'react';
import SideBarMemoryCategory from './side-bar-memory-category.component';

import './side-bar-memory-categories.component.css';

const CATEGORIES = [
    {
        id: 'all',
        name: 'All',
        classContainerHeader: 'bg-c-all',
        classAlignContainer: 'c-all-align',
        iclass: 'fas fa-globe',
    },
    {
        id: 'love',
        name: 'Love',
        classContainerHeader: 'bg-c-love',
        classAlignContainer: 'c-love-align',
        iclass: 'fas fa-heart',
    },
    {
        id: 'education',
        name: 'Education',
        classContainerHeader: 'bg-c-education',
        classAlignContainer: 'c-education-align',
        iclass: 'fas fa-graduation-cap',
    },
    {
        id: 'travel',
        name: 'Travel',
        classContainerHeader: 'bg-c-travel',
        classAlignContainer: 'c-travel-align',
        iclass: 'fas fa-plane',
    },
    {
        id: 'sport',
        name: 'Sport',
        classContainerHeader: 'bg-c-sport',
        classAlignContainer: 'c-sport-align',
        iclass: 'fas fa-dumbbell',
    },
    {
        id: 'nature',
        name: 'Nature',
        classContainerHeader: 'bg-c-nature',
        classAlignContainer: 'c-nature-align',
        iclass: 'fas fa-leaf',
    },
    {
        id: 'animal',
        name: 'Animal',
        classContainerHeader: 'bg-c-animal',
        classAlignContainer: 'c-animal-align',
        iclass: 'fas fa-paw',
    },
]

function handleCategoryChange(e) {
    console.log(e);
}

function SideBarMemoryCategories() {
    const [category, setCategory] = useState('all');

    const sideBarCategories = CATEGORIES
        .map(v =>
            <SideBarMemoryCategory
                key={v.id}
                id={v.id}
                currentId={category}
                setCategory={handleCategoryChange}
                name={v.name}
                iclass={v.iclass}
                classAlignContainer={v.classAlignContainer}
                classContainerHeader={v.classContainerHeader} />)
    return (
        <>
            {sideBarCategories}
        </>
    )
}

export default SideBarMemoryCategories;
