import React from 'react';

function ListGroup({ items, contentEditable, conteditableClass, itemClasses }) {
    const currentItems = Object.keys(items).map((k, index) => 
        <li key={index} className={`list-group-item text-right ${itemClasses}`}>
            <span className="pull-left">
                <strong>{k}: </strong>
            </span> {items[k]}
        </li>
    )

    return (
        <ul className="list-group">
            <li className={`list-group-item text-muted ${conteditableClass}`} contentEditable={false}>{contentEditable}</li>
            {currentItems}
        </ul>
    )
}

export default ListGroup;
