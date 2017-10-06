// import clone from 'clone';

import types from '../actionTypes';
import { requestMedia } from '../../services/mediaService';

export function updateMedia(media) {
    return {
        type: types.UPDATE_MEDIA,
        media,
    };
}

export function getMedia() {
    return (dispatch) => {
        return requestMedia()
            .then(response => response.json())
            .then(({ media }) => {
                dispatch(updateMedia(media));
            })
            .catch((error) => { throw (error); });
    };
}
