import { getTopics, createTopic } from '../../services/topicService';
import { loading, loadingSuccess } from '../loaderActions/loaderActions';
import { broadcast } from '../broadcastActions/broadcastActions';
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

export function createTopicThunk(topic) {
    return (dispatch) => {
        dispatch(loading());
        return createTopic(topic)
            .then(response => response.json())
            .then(() => {
                dispatch(getTopicsThunk());
                dispatch(loadingSuccess());
                dispatch(broadcast('Topic successfully created.', 'success'));
            });
    };
}

