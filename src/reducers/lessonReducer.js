import types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.lesson, action) {
    switch (action.type) {
    case types.UPDATE_LESSON: {
        return action.lesson;
    }
    default:
        return state;
    }
}

