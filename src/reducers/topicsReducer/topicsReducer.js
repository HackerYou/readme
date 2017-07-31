import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.topics, action) {
    switch (action.type) {
    case types.UPDATE_TOPICS: {
        const newState = JSON.parse(JSON.stringify(state));
        newState.topics = action.topics;
        return newState;
    }
    case types.SET_TOPICS_FILTER: {
        const newState = JSON.parse(JSON.stringify(state));
        newState.visibilityFilter = action.filter;
        return newState;
    }
    default: {
        return state;
    }
    }
}
