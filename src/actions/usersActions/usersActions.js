import { getAllInstructors } from '../../services/userService';
import types from '../actionTypes';

export function updateInstructors(instructors) {
    return {
        type: types.UPDATE_INSTRUCTORS,
        instructors,
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
