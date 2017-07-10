import types from './actionTypes';

export function loading() {
    return {
        type: types.LOADING,
    };
}

export function loadingSuccess() {
    return {
        type: types.LOADING_SUCCESS,
    };
}

