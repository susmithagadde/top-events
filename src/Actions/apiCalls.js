import axios from 'axios';

axios.interceptors.response.use(function (response) {

    return response;
}, function (error) {

    return Promise.reject(error);
});

export const apiRequest = () => {
    const defaultOptions = {

    };
    return {
        get: (url, options = {}) => {
            return axios.get(url, { ...defaultOptions, ...options });
        },
    };
};
