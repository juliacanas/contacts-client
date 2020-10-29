import { axiosInstance } from './api';

export const getAll = (token) => {
    return axiosInstance.get('/contacts', { headers: { Authoritzation: token }});
}