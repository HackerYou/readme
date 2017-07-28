import fetch from 'isomorphic-fetch';
import config from './config';

export function getTopics() {
    return fetch(`${config.getApiUrl()}/topic/`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
}
