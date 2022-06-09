import { ACCOUNT_KEYS } from '../constants/constants';

export default function authHeader() {
    const token = localStorage.getItem(ACCOUNT_KEYS.TOKEN);
    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        return {};
    }
}
