import types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.classroom, action) {
    switch (action.type) {
    case types.UPDATE_CLASSROOM:
        return action.classroom;
    default:
        return state;
    }
}
