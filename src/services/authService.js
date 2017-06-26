import fetch from 'isomorphic-fetch';

import config from './config';
import { setLocalStorage } from '../utils/index';

export const login = ({ email, password }) => {
    return fetch(`${config.getApiUrl()}/user/authenticate?email=${email}&password=${password}`, {
        method: 'get',
    });
};

export const setCredentials = ({ token, user_id: userId }) => {
    const options = {};
    const appName = config.getAppName();
    options[`${appName}_loggedIn`] = true;
    options[`${appName}_token`] = token;
    options[`${appName}_user_id`] = userId;
    setLocalStorage(options);
};

export default {
    login,
};
