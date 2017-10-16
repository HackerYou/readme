import clone from 'clone';
import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.users, action) {
    switch (action.type) {
    case types.UPDATE_INSTRUCTORS: {
        const newState = clone(state);
        newState.instructors = action.users;
        return newState;
    }
    case types.UPDATE_USERS: {
        const newState = clone(state);
        newState.users = action.users;
        return newState;
    }
    case types.SEARCH_USERS: {
        const newState = JSON.parse(JSON.stringify(state));
        newState.searchKeyword = action.keyword;
        return newState;
    }
    default:
        return state;
    }
}
