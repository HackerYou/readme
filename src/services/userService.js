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

export const createUser = (user) => {
    return fetch(`${config.getApiUrl()}/user`, {
        method: 'POST',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
};

export const updateUser = (user, id) => {
    // const id = user._id;
    return fetch(`${config.getApiUrl()}/user/${id}`, {
        method: 'PUT',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
};
