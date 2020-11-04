import { axiosInstance } from './api';

export const login = (data) => {
    return axiosInstance.post('/auth/login', data);
};

/* export const getNewToken = (refreshToken) => {
    return axiosInstance.post('/auth/refresh-token', {refreshToken});
} */