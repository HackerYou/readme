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

export function createTopic(topic) {
    return fetch(`${config.getApiUrl()}/topic`, {
        method: 'POST',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(topic),
    });
}
