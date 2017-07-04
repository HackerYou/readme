import types from './actionTypes';
import { requestCourses } from '../services/courseService';

export function updateCourses(courses) {
    return {
        type: types.UPDATE_COURSES,
        courses,
    };
}

export function getCourses() {
    return (dispatch) => {
        requestCourses()
            .then(response => response.json())
            .then(({ course }) => {
                dispatch(updateCourses(course));
            })
            .catch((error) => {
                throw (error);
            });
    };
}

