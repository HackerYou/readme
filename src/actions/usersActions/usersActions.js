import { getAllInstructors, getAllUsers, createUser } from '../../services/userService';
import { loading, loadingSuccess } from '../loaderActions/loaderActions';
import { broadcast } from '../broadcastActions/broadcastActions';
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

export function createUserThunk(user) {
    return (dispatch) => {
        dispatch(loading());
        return createUser(user)
            // .then(response => response.json())
            .then(() => {
                dispatch(getAllUsersThunk());
                dispatch(loadingSuccess());
                dispatch(broadcast('User successfully created.', 'success'));
            });
    };
}
