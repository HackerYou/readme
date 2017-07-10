import { push } from 'react-router-redux';
import types from './actionTypes';
import { login, setCredentials } from '../services/authService';
import { getUserDetails } from './userActions';
import { loading, loadingSuccess } from './loaderActions';
import { errorHandler } from './index';

export function loginSuccess() {
    return { type: types.LOG_IN_SUCCESS };
}

export function logInUser(credentials) {
    return (dispatch) => {
        dispatch(loading());
        return login(credentials)
            .then(response => response.json())
            .then((data) => {
                setCredentials(data);
                dispatch(push('/dashboard'));
                dispatch(getUserDetails(data.user_id));
                dispatch(loginSuccess());
                dispatch(loadingSuccess());
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, types.AUTH_ERROR);
            });
    };
}

export function logOut() {
    return {
        type: types.LOG_OUT,
    };
}

export function logOutUser() {
    return (dispatch) => {
        setCredentials({
            token: '',
            user_id: '',
        });
        dispatch(push('/'));
        dispatch(logOut());
    };
}
