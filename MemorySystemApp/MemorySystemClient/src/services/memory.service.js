import axios from "axios";

import authHeader from '../shared/axios-utils';

import { DOMAIN_URL } from '../constants/constants';

const CREATE_URL = `${DOMAIN_URL}memory/create`;
const USER_MEMORIES_URL = `${DOMAIN_URL}memory/userMemories`;
const ALL_MEMORIES_URL = `${DOMAIN_URL}memory/allMemories`;
const LIKE_MEMORY_URL = `${DOMAIN_URL}memory/like?id=`;
const FAORITE_MEMORY_URL = `${DOMAIN_URL}memory/favorite?id=`;
const MEMORY_DETAILS_URL = `${DOMAIN_URL}memory/details?id=`;

class MemoryService {
    create(payload) {
        return axios.post(CREATE_URL, payload, { headers: authHeader() });
    }

    userMemories(category, pageNumber, pageSize, search) {
        return axios.get(
            `${USER_MEMORIES_URL}`,
            {
                params: {
                    category: category,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    search: search,
                },
                headers: authHeader(),
            });
    }

    allMemories(category, pageNumber, pageSize, search) {
        return axios.get(
            `${ALL_MEMORIES_URL}`,
            {
                params: {
                    category: category,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    search: search,
                },
                headers: authHeader(),
            });
    }

    details(id) {
        return axios.get(`${MEMORY_DETAILS_URL}${id}`, { headers: authHeader() });
    }

    likeMemory(id) {
        return axios.post(`${LIKE_MEMORY_URL}${id}`, {}, { headers: authHeader() });
    }

    favoriteMemory(id) {
        return axios.post(`${FAORITE_MEMORY_URL}${id}`, {}, { headers: authHeader() });
    }
}

const memoryService = new MemoryService();

export default memoryService;
