import types from '../actionTypes';
import { getCourses } from '../courseActions/courseActions';
import { getCourseById, createCourse } from '../../services/courseService';
import { getUserId } from '../../services/userService';
import { errorHandler } from '../index';
import { loading, loadingSuccess } from '../loaderActions/loaderActions';

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

const getTestResultsForClassroom = (classroom, users) => {
    return {
        type: types.GET_TEST_RESULTS,
        classroom,
        users,
    };
};

export function getTestResults(classroomId) {
    return (dispatch) => {
        dispatch(loading());
        return getCourseById(classroomId)
            .then(response => response.json())
            .then(({ course }) => {
                const userReqs = course.students.map((studentShortDesc) => {
                    return getUserId(studentShortDesc._id)
                    .then(response => response.json());
                });
                Promise.all(userReqs)
                .then((usersLongDesc) => {
                    const users = usersLongDesc.map((userObj) => {
                        return Object.assign({}, userObj.user);
                    });
                    dispatch(getTestResultsForClassroom(course, users));
                    dispatch(loadingSuccess());
                });
            });
    };
}

export function createClassroomThunk(payload) {
    return (dispatch) => {
        dispatch(loading());
        return createCourse(payload)
            .then(response => response.json())
            .then(() => {
                dispatch(getCourses());
            });
    };
}

