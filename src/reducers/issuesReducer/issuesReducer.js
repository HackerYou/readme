import types from '../../actions/actionTypes';
import initialState from '../initialState';

import stringify from '../../utils/stringify';

export default function (state = initialState.issues, action) {
    switch (action.type) {

    case types.UPDATE_ISSUES: {
        const newState = stringify(state);
        Object.assign(newState, { issues: action.issues });
        return newState;
    }
    default:
        return state;
    }
}
