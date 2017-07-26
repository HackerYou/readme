import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.broadcast, action) {
    switch (action.type) {
    case types.BROADCAST_MESSAGE:
        return {
            message: action.message,
            show: true,
            broadcastType: action.broadcastType,
        };
    case types.END_BROADCAST: {
        const newState = Object.assign({}, state, { show: false });
        return newState;
    }
    default:
        return state;
    }
}
