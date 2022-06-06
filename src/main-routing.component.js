import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/footer/footer.component';
import Home from './components/home/home.component';
import UserCreate from './components/user/create/create-user.component';
import UpdateUser from './components/user/update/update-user.component';
import LoginUser from './components/user/login/login-user.component';

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/user/create' element={<UserCreate/>}></Route>
                <Route path='/user/update' element={<UpdateUser/>}></Route>
                <Route path='/user/loging' element={<LoginUser/>}></Route>
                <Route path='/footer' element={<Footer/>}></Route>
            </Routes>
        </>
    )
}

export default Routing;
