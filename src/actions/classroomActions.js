import types from './actionTypes';
import { getCourseById } from '../services/courseService';
import { errorHandler } from './index';
import { loading, loadingSuccess } from './loaderActions';

export function updateClassroom(classroom) {
    return {
        type: types.UPDATE_CLASSROOM,
        classroom,
    };
}

export function getCourse(id) {
    return (dispatch) => {
        dispatch(loading());
        return getCourseById(id)
            .then(response => response.json())
            .then(({ course }) => {
                dispatch(updateClassroom(course));
                dispatch(loadingSuccess());
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, types.AUTH_ERROR);
            });
    };
}
