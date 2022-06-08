import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/home.component';
import UserCreate from './components/user/create/create-user.component';
import UpdateUser from './components/user/update/update-user.component';
import LoginUser from './components/user/login/login-user.component';

import accountService from './services/account.service';

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/user/create' element={<DisableAccessWhenAuth><UserCreate/></DisableAccessWhenAuth>}></Route>
                <Route path='/user/update' element={<RequireAuth><UpdateUser/></RequireAuth>}></Route>
                <Route path='/user/loging' element={<DisableAccessWhenAuth><LoginUser/></DisableAccessWhenAuth>}></Route>
            </Routes>
        </>
    )
}

function DisableAccessWhenAuth({children}) {
    debugger;
    if (accountService.isLoggedIn()) {
        return <Navigate to="/" replace />;
    }

    return children;
}

function RequireAuth({ onlyAdminAccess, children }) {
    const location = useLocation();

    if (!accountService.isLoggedIn()) {
        return <Navigate to="/user/login" state={{ from: location }} replace />;
    }

    if (onlyAdminAccess) {
        if (!accountService.isAdmin()) {
            return <Navigate to="/" replace />;
        }
    }

    return children;
}

export default Routing;
