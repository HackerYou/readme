import fetch from 'isomorphic-fetch';
import config from './config';

export const requestIssues = () => {
    return fetch(`${config.getApiUrl().replace('v1', 'v2')}/flaggedIssues`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
};

export const postIssue = (issue) => {
    return fetch(`${config.getApiUrl().replace('v1', 'v2')}/flaggedIssues`, {
        method: 'POST',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(issue),
    });
};
