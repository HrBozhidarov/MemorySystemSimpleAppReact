import axios from "axios";
import { DOMAIN_URL, ACCOUNT_KEYS } from '../constants/constants'

const LOGIN_URL = `${DOMAIN_URL}account/login`;

class AccountService {
    login(payload) {
        return axios.post(LOGIN_URL, payload).then(result => {
            localStorage.setItem(ACCOUNT_KEYS.TOKEN, result.data.token);
            localStorage.setItem(ACCOUNT_KEYS.USER_PROFILE_PICTURE, result.data.profileUrl);
            localStorage.setItem(ACCOUNT_KEYS.ROLE, result.data.role);
        });
    }

    logout() {
        localStorage.removeItem(ACCOUNT_KEYS.TOKEN);
        localStorage.removeItem(ACCOUNT_KEYS.USER_PROFILE_PICTURE);
        localStorage.removeItem(ACCOUNT_KEYS.MEMORY_CATEGORY);
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    isLoggedIn() {
        return this.getToken() != null;
    }
}

const accountService = new AccountService();

export default accountService;