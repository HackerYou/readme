import config from './config';

export const login = ({ email, password }) => (
    fetch(`${config.getApiUrl()}/user/authenticate`, {
        method: 'get',
        body: {
            email,
            password,
        },
    })
);

export default {
    login,
};
