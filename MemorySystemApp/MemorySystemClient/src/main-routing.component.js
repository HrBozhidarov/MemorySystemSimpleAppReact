import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Home from './components/home/home.component';
import UserCreate from './components/user/create-user.component';
import UpdateUser from './components/user/update-user.component';
import LoginUser from './components/user/login-user.component';
import CreateMemory from './components/memory/create-memory.component';
import UserMemories from './components/memory/user-memories.component';
import Profile from './components/user/profile.component';

import { useAuth } from './shared/auth-context';

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/user/create' element={<DisableAccessWhenAuth><UserCreate /></DisableAccessWhenAuth>}></Route>
                <Route path='/user/update' element={<RequireAuth><UpdateUser /></RequireAuth>}></Route>
                <Route path='/user/login' element={<DisableAccessWhenAuth><LoginUser /></DisableAccessWhenAuth>}></Route>
                <Route path='/memory/create' element={<RequireAuth><CreateMemory /></RequireAuth>}></Route>
                <Route path='/my/memories' element={<RequireAuth><UserMemories /></RequireAuth>}></Route>
                <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
            </Routes>
        </>
    )
}

function DisableAccessWhenAuth({ children }) {
    const userAthContext = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userAthContext.user.isAuth) {
            return navigate('/', { replace: true });
        }
    })

    return children;
}

function RequireAuth({ onlyAdminAccess, children }) {
    const location = useLocation();
    const userAthContext = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userAthContext.user.isAuth) {
            return navigate('/user/login', { replace: true, state: { from: location?.pathname || '/' } });
        }
    
        if (onlyAdminAccess) {
            if (!userAthContext.user.isAdmin) {
                return navigate('/', { replace: true });
            }
        }
    })

    return children;
}

export default Routing;
