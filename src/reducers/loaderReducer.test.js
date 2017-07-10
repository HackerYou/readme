import loaderReducer from './loaderReducer';
import config from '../services/config';
import types from '../actions/actionTypes';
import initialState from './initialState';

describe('loading reducer', () => {
    it('should return the initial state', () => {
        expect(loaderReducer(undefined, {})).toEqual(
            {
                loading: false,
            }
        )
    });

    it('should handle LOADING', () => {
        expect(
            loaderReducer({}, {
                type: types.LOADING,
            })
        ).toEqual({
            loading: true,
        });
    });
    
    it('should handle LOADING_SUCCESS', () => {
        expect(
            loaderReducer({}, {
                type: types.LOADING_SUCCESS,
            })
        ).toEqual({
            loading: false,
        });
    });
});