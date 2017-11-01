import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.courses, action) {
    switch (action.type) {
    case types.UPDATE_COURSES_ARRAY: {
        let newState = Array.from(state);
        newState = action.courses;
        return newState;
    }
    default:
        return state;
    }
}
