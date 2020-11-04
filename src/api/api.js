import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true
});

axiosInstance.interceptors.response.use(response => {
    return response.data;
}, error => {
    return new Promise((resolve) => {
        console.log('Hola')
        const originalRequest = error.config
        const refreshToken = localStorage.getItem('refreshToken')
        if(error.response && error.response.data.error.message === 'jwt expired' && error.config && !error.config._isRetryRequest && refreshToken) {
            originalRequest._retry = true;
            const response = fetch('http://localhost:4000/api/auth/refresh-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refreshToken
                })
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                const parseJwt = JSON.parse(atob(res.token.split('.')[1]))
                const user = {userId: parseJwt.userId, userName: parseJwt.userName}
            
                localStorage.setItem('user', user);
                localStorage.setItem('refreshToken', res.refreshToken)
                localStorage.setItem('token', res.token)
                console.log(localStorage)
                return axios(originalRequest)
            })
            resolve(response)
        }
        return Promise.reject(error)
    })
    /* return Promise.reject(error); */
})