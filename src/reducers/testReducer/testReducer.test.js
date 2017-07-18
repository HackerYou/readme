import testReducer from './testReducer';
import config from '../../services/config';
import types from '../../actions/actionTypes';
import initialState from '../initialState';

describe('test reducer', () => {
    it('should return the initial state', () => {
        expect(testReducer(undefined, {})).toEqual(
            {
                questions: []
            }
        )
    })

    it('should handle GET_QUESTIONS', () => {
        const questions = [];
        expect(
            testReducer({}, {
                type: types.GET_QUESTIONS,
                questions,
            })
        ).toEqual({
            questions,
        });
    });
});
