import axios from "axios";

import authHeader from './authheader'

import { DOMAIN_URL } from '../constants/constants';

const CREATE_URL = DOMAIN_URL + 'user/create';
const UPDATE_URL = DOMAIN_URL + 'user/update';
const DETAILS_URL = DOMAIN_URL + 'user/details';

class UserService {
    create(payload) {
        return axios.post(CREATE_URL, payload);
    }

    details() {
        return axios.get(DETAILS_URL, { headers: authHeader() });
    }

    update(payload) {
        return axios.post(UPDATE_URL, payload, { headers: authHeader() });
    }
}

export default new UserService();
