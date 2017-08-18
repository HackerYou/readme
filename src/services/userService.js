import fetch from 'isomorphic-fetch';
import config from './config';

export const getUserId = (id) => {
    return fetch(`${config.getApiUrl()}/user/${id}`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
};

export const getAllUsers = () => {
    return fetch(`${config.getApiUrl()}/user`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
};

export const getAllInstructors = () => {
    return fetch(`${config.getApiUrl()}/user`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
        data: {
            instructor: true,
        },
    });
};
