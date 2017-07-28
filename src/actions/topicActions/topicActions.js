import { getTopics } from '../../services/topicService';
import types from '../actionTypes';

export function updateTopics(topics) {
    return {
        type: types.UPDATE_TOPICS,
        topics,
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

