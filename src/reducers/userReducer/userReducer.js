import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.user, action) {
    switch (action.type) {
    case types.UPDATE_USER:
        return action.user;
    default:
        return state;
    }
}
