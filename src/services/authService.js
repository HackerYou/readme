import fetch from 'isomorphic-fetch';

import config from './config';
import { setLocalStorage } from '../utils/index';

const appName = config.getAppName();

export const login = ({ email, password }) => {
    return fetch(`${config.getApiUrl()}/user/authenticate?email=${email}&password=${password}`, {
        method: 'get',
    });
};

export const isLoggedIn = () => {
    if (localStorage.getItem([`${appName}_token`])) {
        return true;
    }
    return false;
};

export const setCredentials = ({ token, user_id: userId }) => {
    const options = {};
    options[`${appName}_token`] = token;
    options[`${appName}_user_id`] = userId;
    setLocalStorage(options);
};

export default {
    login,
};
