import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

import ListGroup from './../shared/list-group.component';
import Comments from './../comments/comments.component';

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
            <div className="col-md-2 m-auto">
                    <ListGroup
                        items={{
                            category: memoryInfo.category,
                            author: memoryInfo.author,
                            likes: memoryInfo.likes,
                            favorites: memoryInfo.favorites
                        }}
                        contentEditable={'Information'}
                        conteditableClass={'border-none'}
                        itemClasses={'border-none'} />
                </div>
                <div className="col-md-6 mt-4 mb-4">
                    <img class="card-img-top border-radius-165px" src={memoryInfo.url} alt="Card image cap" />
                </div>
                <div className='col-md-4 mt-4 mb-4'>
                    <Comments />
                </div>
                 
            </div>
        </>
    )
}

export default MemoryDetails;
