import clone from 'clone';

import types from '../actionTypes';
import { requestCourses, requestTemplates } from '../../services/courseService';

export function updateCourses(courses, settings) {
    let newCourses = clone(courses);
    if (!settings.includeTemplates) {
        newCourses = courses.filter(course => course.template === false);
    }
    return {
        type: types.UPDATE_COURSES,
        courses: newCourses,
    };
}

export function getTemplates() {
    return (dispatch) => {
        return requestTemplates()
            .then(response => response.json())
            .then(({ course }) => {
                dispatch(updateCourses(course, { includeTemplates: true }));
            })
            .catch((error) => {
                throw (error);
            });
    };
}
export function getCourses() {
    return (dispatch) => {
        return requestCourses()
            .then(response => response.json())
            .then(({ course }) => {
                dispatch(updateCourses(course, { includeTemplates: false }));
            })
            .catch((error) => {
                throw (error);
            });
    };
}

