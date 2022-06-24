import axios from "axios";
import { DOMAIN_URL, ACCOUNT_KEYS, ROLE_ADMIN } from '../constants/constants'
import jwt_decode from 'jwt-decode';

const LOGIN_URL = `${DOMAIN_URL}account/login`;

class AccountService {
    login(payload) {
        return axios.post(LOGIN_URL, payload).then(result => {
            localStorage.setItem(ACCOUNT_KEYS.TOKEN, result.data.data.token);
            localStorage.setItem(ACCOUNT_KEYS.USER_PROFILE_PICTURE, result.data.data.profileUrl);
            localStorage.setItem(ACCOUNT_KEYS.ROLE, result.data.data.role);
        });
    }

    logout() {
        localStorage.removeItem(ACCOUNT_KEYS.TOKEN);
        localStorage.removeItem(ACCOUNT_KEYS.USER_PROFILE_PICTURE);
        localStorage.removeItem(ACCOUNT_KEYS.MEMORY_CATEGORY);
    }

    getToken() {
        return localStorage.getItem(ACCOUNT_KEYS.TOKEN);
    }

    isLoggedIn() {
        const token = localStorage.getItem(ACCOUNT_KEYS.TOKEN);
        if (!token) {
            return false;
        }

        const currentDate = new Date();
        const decodedToken = jwt_decode(token);

        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            return false;
        }

        return true;
    }

    isAdmin() {
        return localStorage.getItem(ACCOUNT_KEYS.ROLE) === ROLE_ADMIN;
    }

    getUserProfilePictureUrl() {
        return localStorage.getItem(ACCOUNT_KEYS.USER_PROFILE_PICTURE)
    }
}

const accountService = new AccountService();

export default accountService;
