import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3017/BlogPersonal/v1',
    timeout: 3000,
    httpsAgent: false,
});

export const getCourses = async () => {
    const response = await apiClient.get('/courses/getCourses')
    return response.data;
}

export const getPublications = async () => {
    const response = await apiClient.get('/publications/getPublications')
    return response.data;
}

export const getComments = async () => {
    const response = await apiClient.get('/comments/getComments')
    return response.data;
}

export const addComment = async (data) => {
    const response = await apiClient.post('/comments/addComment', data)
    return response.data;
}