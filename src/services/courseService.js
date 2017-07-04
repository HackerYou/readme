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
