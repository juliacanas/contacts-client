import { axiosInstance } from './api';

export const getAll = (token) => {
    return axiosInstance.get('/contacts', { headers: { 'x-auth-token': token }});
}