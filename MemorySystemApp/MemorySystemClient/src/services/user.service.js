import axios from 'axios';

import authHeader from '../shared/axios-utils'

import { DOMAIN_URL } from '../constants/constants';

const CREATE_URL = DOMAIN_URL + 'user/create';
const UPDATE_URL = DOMAIN_URL + 'user/update';
const INFO_URL = DOMAIN_URL + 'user/profile';

class UserService {
    create(payload) {
        return axios.post(CREATE_URL, payload);
    }

    getUserForUpdate() {
        return axios.get(UPDATE_URL, { headers: authHeader() });
    }

    update(payload) {
        return axios.post(UPDATE_URL, payload, { headers: authHeader() });
    }

    getInfo() {
        return axios.get(INFO_URL, { headers: authHeader() });
    }
}

const userService = new UserService();

export default userService;
