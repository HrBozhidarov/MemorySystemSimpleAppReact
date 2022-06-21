import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

import ListGroup from './../shared/list-group.component';

import { toast } from 'react-toastify';

import memoryService from './../../services/memory.service';

function MemoryDetails() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [memoryInfo, setMemoryInfo] = useState({});

    useEffect(() => {
        memoryService.details(searchParams.get('id'))
            .then(response => {
                setMemoryInfo(response.data.data);
            })
            .catch(err => {
                toast.error(err.response?.data?.errorMessage || err.message);
            })
    }, [])

    return (
        <>
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-4"></div>
                <div className="col-md-2">
                    <ListGroup
                        items={{
                            category: memoryInfo.category,
                            author: memoryInfo.author,
                            likes: memoryInfo.likes,
                            favorites: memoryInfo.favorites
                        }}
                        contentEditable={'Memory'}
                        conteditableClass={'padding-20px'}
                        itemClasses={'padding-20px'} />
                </div>
            </div>
        </>
    )
}

export default MemoryDetails;
