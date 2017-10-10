// eslint-disable-next-line
import types from '../../actions/actionTypes';
import initialState from '../initialState';

import objClone from '../../utils/objClone';

export default function (state = initialState.media, action) {
    switch (action.type) {
    case types.UPDATE_MEDIA: {
        const newState = objClone(state);
        Object.assign(newState, { media: action.media });
        return newState;
    }
    default:
        return state;
    }
}
