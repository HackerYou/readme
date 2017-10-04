import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.issues, action) {
    switch (action.type) {

    case types.UPDATE_ISSUES: {
        const newState = JSON.parse(JSON.stringify(state));
        Object.assign(newState, { issues: action.issues });
        return newState;
    }
    default:
        return state;
    }
}
