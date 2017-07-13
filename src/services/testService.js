import fetch from 'isomorphic-fetch';
import config from './config';

export function getQuestions() {
    return fetch(`${config.getApiUrl().replace('v1', 'v2')}/questions`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
}
