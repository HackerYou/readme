import { getAllInstructors } from '../../services/userService';
import types from '../actionTypes';

export function updateInstructors(users) {
    return {
        type: types.UPDATE_INSTRUCTORS,
        users,
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
