import { push } from 'react-router-redux';

import types from './actionTypes';
import { login, setCredentials } from '../services/authService';

export function loginSuccess() {
    return { type: types.LOG_IN_SUCCESS };
}

export function logInUser(credentials) {
    return dispatch => (
        login(credentials)
            .then(response => response.json())
            .then((data) => {
                setCredentials(data);
                dispatch(push('/dashboard'));
                dispatch(loginSuccess());
            })
            .catch((error) => {
                throw (error);
            })
    );
}

export function logOutUser() {
    setCredentials({
        token: '',
        user_id: '',
    });
    return {
        type: types.LOG_OUT,
    };
}
