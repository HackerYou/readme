import types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.loading, action) {
    switch (action.type) {
    case types.LOADING:
        return {
            loading: true,
        };
    case types.LOADING_SUCCESS:
        return {
            loading: false,
        };
    default:
        return state;
    }
}
