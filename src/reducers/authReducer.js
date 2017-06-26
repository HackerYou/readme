import types from '../actions/actionTypes';
import initialState from './initialState';
import config from '../services/config';

export default function (state = initialState.auth, action) {
    switch (action.type) {
    case types.LOG_IN_SUCCESS:
        return {
            loggedIn: !!localStorage[`${config.getAppName()}_token`],
        };
    case types.LOG_OUT:
        return {
            loggedIn: !!localStorage[`${config.getAppName()}_token`],
        };
    default:
        return state;
    }
}
