import React, { useEffect, useState } from 'react';

import ListGroup from './../shared/list-group.component';

import userService from './../../services/user.service';

function Profile() {
    const [info, setInfo] = useState({});

    useEffect(() => {
        userService.getInfo()
            .then((response) => {
                setInfo(response.data.data);
            })
            .catch(e => {

            })
    }, []);



    return (
        <>
            <div className="col-sm-3 margin-top-20px margin-bottom-20px">
                <ListGroup items={info} contentEditable={'Profile'} conteditableClass={'padding-20px'} itemClasses={'padding-20px'} />
            </div>
        </>
    )
}

export default Profile;
