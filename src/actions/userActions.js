import { getUserId } from '../services/userService';
import { isLoggedIn } from '../services/authService';
import config from '../services/config';

import types from './actionTypes';

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
