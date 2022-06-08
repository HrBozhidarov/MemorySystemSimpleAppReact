import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import AuthContext from './auth-context';

import accountService from '../services/account.service';
import userService from '../services/user.service';

import { toast } from 'react-toastify';

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { isAuth, setIsAuth } = useState(false);
    const { isAdmin, setIsAdmin } = useState(false);

    const onLogin = (data) => {
        accountService
            .login(data)
            .then(() => {
                setIsAuth(accountService.isLoggedIn());
                setIsAdmin(accountService.isAdmin());
                
                toast.success('Loggin successfully');

                navigate('/', { replace: true });
            })
            .catch(err => {
                toast.error(err.message);
            });
    }

    const onCreate = (data) => {
        userService
            .create(data)
            .then(() => {
                toast.success('Update yours data successfully');

                navigate('/', { replace: true });
            })
            .catch(err => {
                toast.error(err.message);
            });
    }

    const value = {
        onLogin: onLogin,
        onCreate: onCreate,
        user: {
            isAuth: isAuth,
            isAdmin: isAdmin,
        },
    };

    return (
        <AuthContext.Provide value={value}>
            {children}
        </AuthContext.Provide>
    )
}

export default AuthProvider;
