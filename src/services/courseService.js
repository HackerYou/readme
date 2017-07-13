import fetch from 'isomorphic-fetch';
import config from './config';

export const requestCourses = () => {
    return fetch(`${config.getApiUrl()}/course`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
};

export const requestTemplates = () => {
    return fetch(`${config.getApiUrl()}/course/template`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
};

export const getCourseById = (id) => {
    return fetch(`${config.getApiUrl()}/course/${id}`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
};

