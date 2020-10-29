import axios from 'axios';

export const axiosInstance = axios.create({
    baseUrl: 'http://localhost:4000/api',
    withCredentials: true
});

axiosInstance.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
})