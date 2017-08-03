import { getTopics } from '../../services/topicService';
import types from '../actionTypes';

export function updateTopics(topics) {
    return {
        type: types.UPDATE_TOPICS,
        topics,
    };
}

export function searchTopics(keyword) {
    return {
        type: types.SEARCH_TOPICS,
        keyword,
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: types.SET_TOPICS_FILTER,
        filter,
    };
}

export function getTopicsThunk() {
    return (dispatch) => {
        return getTopics()
            .then(response => response.json())
            .then((data) => {
                dispatch(updateTopics(data.topic));
            });
    };
}

