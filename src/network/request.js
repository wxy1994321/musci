import axios from 'axios';

export function request(config) {
    const instance = axios.create({
        baseURL: '/api',
        timeout: 20000
    });

    //相应拦截
    axios.interceptors.response.use(response => {
        return response.data;
    });

    return instance(config)
}