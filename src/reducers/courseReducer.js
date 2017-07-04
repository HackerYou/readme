import types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.courses, action) {
    const { courses } = state;
    switch (action.type) {
    case types.GET_COURSES:
        return {
            courses,
        };
    case types.UPDATE_COURSES:
        return {
            courses: action.courses,
        };
    default:
        return state;
    }
}
