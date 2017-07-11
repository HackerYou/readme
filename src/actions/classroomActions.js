import types from './actionTypes';
import { getCourseById } from '../services/courseService';
import { getUserId } from '../services/userService';
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

export function getTestResultsForCourse(classroomId) {
    return (dispatch) => {
        dispatch(loading());
        return getCourseById(classroomId)
            .then(response => response.json())
            .then(({ course }) => {
                const { tests } = course;
                let usersInfo = [];
                tests.forEach((test) => {
                    usersInfo = test.users.map((userId) => {
                        return getUserId(userId);
                    });
                });
                Promise.all(usersInfo)
                    .then((promises) => {
                        const users = promises.map((promise) => {
                            return promise.json().then(user => user);
                            // return promise.json();
                        });
                        console.log(users);
                    });
            });
    };
}
