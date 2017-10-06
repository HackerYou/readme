import fetch from 'isomorphic-fetch';
import config from './config';

export const requestMedia = () => {
    return fetch(`${config.getApiUrl()}/media`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
};
