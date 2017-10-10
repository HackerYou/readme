import fetch from 'isomorphic-fetch';
import config from './config';

const v2url = `${config.getApiUrl().replace('v1', 'v2')}`;

export const requestIssues = () => {
    return fetch(`${v2url}/flaggedIssues`, {
        method: 'GET',
        headers: {
            'x-access-token': config.getToken(),
        },
    });
};

export const postIssue = (issue) => {
    return fetch(`${v2url}/flaggedIssues`, {
        method: 'POST',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(issue),
    });
};

export const deleteIssue = (id) => {
    return fetch(`${v2url}/flaggedIssues/${id}`, {
        method: 'DELETE',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
    });
};

export const updateIssue = (id, issueData) => {
    return fetch(`${v2url}/flaggedIssues/${id}`, {
        method: 'PUT',
        headers: {
            'x-access-token': config.getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(issueData),
    });
};
