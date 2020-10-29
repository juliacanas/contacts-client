import { axiosInstance } from './api';

export const login = (data) => {
    return axiosInstance.post('/auth/login', data);
};