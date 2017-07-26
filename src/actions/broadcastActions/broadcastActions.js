import types from '../actionTypes';

export function broadcast(message, broadcastType) {
    return {
        type: types.BROADCAST_MESSAGE,
        message,
        broadcastType,
    };
}

export function endBroadcast() {
    return {
        type: types.END_BROADCAST,
    };
}
