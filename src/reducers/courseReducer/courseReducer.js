import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.course, action) {
    switch (action.type) {
    case types.UPDATE_COURSES: {
        const { courses } = action;
        return {
            courses,
        };
    }
    default:
        return state;
    }
}
