import fetch from 'isomorphic-fetch';
import config from './config';

export const requestCourses = () => {
    const myHeaders = new Headers();

    myHeaders.append('x-access-token', config.getToken());
    return fetch(`${config.getApiUrl()}/course`, {
        method: 'GET',
        headers: myHeaders,
    });
};
