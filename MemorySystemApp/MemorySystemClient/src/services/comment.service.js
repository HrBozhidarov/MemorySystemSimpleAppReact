import axios from "axios";

import authHeader from '../shared/axios-utils';

import { DOMAIN_URL } from '../constants/constants';

const CREATE_URL = `${DOMAIN_URL}comment/create`;
const COMMENTS_BY_MEMORY_ID_URL = `${DOMAIN_URL}comment/byMemoryId`;

class CommentService {
    createComment(payload) {
        return axios.post(CREATE_URL, payload, { headers: authHeader() });
    }

    commentsByMemoryId(memoryId, pageNumber, pageSize) {
        return axios.get(
            `${COMMENTS_BY_MEMORY_ID_URL}${memoryId}`,
            {
                params: {
                    memoryId: memoryId,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                },
                headers: authHeader(),
            });
    }
}

const commentService = new CommentService();

export default commentService;
