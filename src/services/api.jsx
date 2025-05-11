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

export const getPublicationsByDate = async (startDate, endDate) => {
    try {
        const response = await apiClient.get('/publications/getByDateRange', {
            params: {
                startDate,
                endDate
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching publications by date:', error);
        throw error; // Propaga el error para manejarlo en el hook
    }
};

export const getComments = async () => {
    const response = await apiClient.get('/comments/getComments')
    return response.data;
}

export const addComment = async (data) => {
    const response = await apiClient.post('/comments/addComment', data)
    return response.data;
}