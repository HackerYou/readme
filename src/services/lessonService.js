import fetch from 'isomorphic-fetch';
import config from './config';

export function getLessonById(id) {
    return fetch(`${config.getApiUrl()}/lesson/${id}`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
}

