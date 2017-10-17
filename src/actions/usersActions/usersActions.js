import { getAllInstructors, getAllUsers } from '../../services/userService';
import types from '../actionTypes';

export function updateInstructors(users) {
    return {
        type: types.UPDATE_INSTRUCTORS,
        users,
    };
}

export function searchUsers(keyword) {
    return {
        type: types.SEARCH_USERS,
        keyword,
    };
}

export function updateUsers(users) {
    return {
        type: types.UPDATE_USERS,
        users,
    };
}

export function getAllUsersThunk() {
    return (dispatch) => {
        return getAllUsers()
            .then(response => response.json())
            .then((data) => {
                dispatch(updateUsers(data.user));
            });
    };
}

export function getInstructors() {
    return (dispatch) => {
        return getAllInstructors()
            .then(response => response.json())
            .then((data) => {
                dispatch(updateInstructors(data.user));
            });
    };
}
