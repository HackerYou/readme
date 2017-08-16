import clone from 'clone';

import types from '../actionTypes';
import { requestCourses, requestTemplates, createTemplate } from '../../services/courseService';
import { broadcast } from '../broadcastActions/broadcastActions';
import { loading, loadingSuccess } from '../loaderActions/loaderActions';

export function updateCourses(courses, settings = { includeTemplates: true }) {
    let newCourses = clone(courses);
    if (settings.includeTemplates === false) {
        newCourses = courses.filter(course => course.template !== true);
    }
    return {
        type: types.UPDATE_COURSES,
        courses: newCourses,
    };
}

export function updateTemplates(templates) {
    return {
        type: types.UPDATE_TEMPLATES,
        templates,
    };
}

export function getTemplates() {
    return (dispatch) => {
        return requestTemplates()
            .then(response => response.json())
            .then(({ course }) => {
                dispatch(updateTemplates(course));
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

export function createTemplateThunk(template) {
    return (dispatch) => {
        dispatch(loading());
        return createTemplate(template)
            .then(response => response.json())
            .then(() => {
                dispatch(loadingSuccess());
                dispatch(getCourses());
                dispatch(broadcast('Template successfully created.', 'success'));
            });
    };
}

