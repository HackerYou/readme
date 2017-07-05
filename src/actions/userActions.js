import { getUserId } from '../services/userService';
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
