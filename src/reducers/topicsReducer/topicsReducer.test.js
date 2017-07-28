import topicsReducer from './topicsReducer';
import config from '../../services/config';
import types from '../../actions/actionTypes';
import initialState from '../initialState';

describe('topics reducer', () => {
    it('should return the initial state', () => {
        expect(topicsReducer(undefined, {})).toEqual(
            {
                topics: []
            }
        )
    })

    it('should handle UPDATE_TOPICS', () => {
        const topics = [];
        expect(
            topicsReducer({}, {
                type: types.UPDATE_TOPICS,
                topics,
            })
        ).toEqual({
            topics,
        });
    });
});
