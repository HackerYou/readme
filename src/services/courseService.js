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

export const createCourse = (data) => {
    return fetch(`${config.getApiUrl()}/course`, {
        method: 'POST',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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

export const createTemplate = (course) => {
    return fetch(`${config.getApiUrl()}/course/template`, {
        method: 'POST',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
    });
};
