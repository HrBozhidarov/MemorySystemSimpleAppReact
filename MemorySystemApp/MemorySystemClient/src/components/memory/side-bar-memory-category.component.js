import React from 'react';
import { Link } from 'react-router-dom';

function SideBarMemoryCategory({ id, currentId, setCategory, name, iclass, classAlignContainer, classContainerHeader }) {
    return (
        <div className={`wrimagecard wrimagecard-topimage c-mt-30 ${id === currentId && 'click-box'}`}>
            <Link to="#" onClick={() => setCategory(id)}>
                <div className={`wrimagecard-topimage_header ${classContainerHeader}`}>
                    <div className={classAlignContainer}><i className={iclass}></i></div>
                </div>
                <div className="wrimagecard-topimage_title">
                    <h4>{name}</h4>
                </div>
            </Link>
        </div>
    )
}

export default SideBarMemoryCategory;
