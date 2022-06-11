import axios from "axios";

import authHeader from '../shared/axios-utils'

import { DOMAIN_URL } from '../constants/constants'

const CREATE_URL = `${DOMAIN_URL}memory/create`;
const USER_MEMORIES_URL = `${DOMAIN_URL}memory/userMemories`;
const LIKE_MEMORY_URL = `${DOMAIN_URL}memory/like?id=`;

class MemoryService {
    create(payload) {
        return axios.post(CREATE_URL, payload, { headers: authHeader() });
    }

    userMemories(category, pageNumber, pageSize) {
        return axios.get(
            `${USER_MEMORIES_URL}`,
            {
                params: {
                    category: category,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                },
                headers: authHeader(),
            });
    }

    likeMemory(id) {
        return this.http.post(`${LIKE_MEMORY_URL}${id}`, { headers: authHeader() });
    }
}

const memoryService = new MemoryService();

export default memoryService;
