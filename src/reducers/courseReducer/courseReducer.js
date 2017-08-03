import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.course, action) {
    switch (action.type) {
    case types.UPDATE_COURSES: {
        const newState = JSON.parse(JSON.stringify(state));
        Object.assign(newState, { courses: action.courses });
        return newState;
    }
    case types.UPDATE_TEMPLATES: {
        const newState = JSON.parse(JSON.stringify(state));
        newState.templates = action.templates;
        return newState;
    }
    default:
        return state;
    }
}
