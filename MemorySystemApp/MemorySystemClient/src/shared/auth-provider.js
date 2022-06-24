import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import AuthContext from './auth-context';

import accountService from '../services/account.service';

import { toast } from 'react-toastify';

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [ isAdmin, setIsAdmin ] = useState(accountService.isAdmin());
    const [ profileUrl, setProfileUrl ] = useState(accountService.getUserProfilePictureUrl());

    // Fix warning
    useEffect(() => {}, []);
    
    const onLogin = (data) => {
        accountService
            .login(data)
            .then(() => {
                setIsAdmin(accountService.isAdmin());
                setProfileUrl(accountService.getUserProfilePictureUrl());
                
                toast.success('Loggin successfully');

                navigate('/', { replace: true });
            })
            .catch(err => {
                toast.error(err.response?.data?.errorMessage || err.message);
            });
    }

    const onLogout = () => {
        accountService.logout();

        setProfileUrl(null);

        navigate('/', { replace: true });
    }

    const value = {
        onLogin: onLogin,
        onLogout: onLogout,
        user: {
            isAuth: accountService.isLoggedIn,
            isAdmin: isAdmin,
            profileUrl: profileUrl,
        },
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
