import clone from 'clone';
import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.users, action) {
    switch (action.type) {
    case types.UPDATE_INSTRUCTORS: {
        const newState = clone(state);
        newState.instructors = action.instructors;
        return newState;
    }
    default:
        return state;
    }
}
