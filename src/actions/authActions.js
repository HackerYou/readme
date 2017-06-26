import types from './actionTypes';
import { login } from '../services/authService';

export function loginSuccess() {
    return { type: types.LOG_IN_SUCCESS };
}

export function logInUser(credentials) {
    return dispatch => (
        login(credentials)
            .then((response) => {
                sessionStorage.setItem('jwt', response.jwt);
                dispatch(loginSuccess());
            })
            .catch((error) => {
                throw (error);
            })
    );
}
