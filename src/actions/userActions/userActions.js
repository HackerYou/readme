import { getUserId } from '../../services/userService';
import { isLoggedIn } from '../../services/authService';
import config from '../../services/config';
import { errorHandler } from '../index';

import types from '../actionTypes';

export function updateUser(user) {
    return {
        type: types.UPDATE_USER,
        user,
    };
}

export function getUserDetails(userId) {
    return dispatch => (
        getUserId(userId)
            .then(response => response.json())
            .then(({ user }) => {
                dispatch(updateUser(user));
            })
            .catch((error) => {
                errorHandler(dispatch, error, types.AUTH_ERROR);
            })
    );
}

export function updateUserStatus() {
    return (dispatch) => {
        if (isLoggedIn()) {
            const userId = config.getUserIdFromToken();
            dispatch(getUserDetails(userId));
        }
    };
}
