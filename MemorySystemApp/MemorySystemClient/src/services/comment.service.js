import axios from "axios";

import authHeader from '../shared/axios-utils';

import { DOMAIN_URL } from '../constants/constants';

const CREATE_URL = `${DOMAIN_URL}comment/create`;
const COMMENTS_BY_MEMORY_ID_URL = `${DOMAIN_URL}comment/getAllByMemoryId`;
const COMMENT_BY_ID_URL = `${DOMAIN_URL}comment/getCommentById`;

class CommentService {
    createComment(memoryId, content) {
        return axios.post(CREATE_URL, { memoryId, content }, { headers: authHeader() });
    }

    commentsByMemoryId(memoryId) {
        return axios.get(
            COMMENTS_BY_MEMORY_ID_URL,
            {
                params: {
                    memoryId: memoryId,
                },
                headers: authHeader(),
            });
    }

    getCommentById(id) {
        return axios.get(
            COMMENT_BY_ID_URL,
            {
                params: {
                    id: id,
                },
                headers: authHeader(),
            });
    }
}

const commentService = new CommentService();

export default commentService;
