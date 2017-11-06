import clone from 'clone';

import types from '../actionTypes';
import { requestCourses } from '../../services/courseService';

export function updateCourses(courses) {
    const newCourses = clone(courses);
    return {
        type: types.UPDATE_COURSES_ARRAY,
        courses: newCourses,
    };
}

export function getCourses() {
    return (dispatch) => {
        return requestCourses()
            .then(response => response.json())
            .then(({ course }) => {
                dispatch(updateCourses(course));
            })
            .catch((error) => {
                throw (error);
            });
    };
}
