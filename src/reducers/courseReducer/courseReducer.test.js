import courseReducer from './courseReducer';
import config from '../../services/config';
import types from '../../actions/actionTypes';
import initialState from '../initialState';

describe('course reducer', () => {
    it('should return the initial state', () => {
        expect(courseReducer(undefined, {})).toEqual(
            {
                courses: []
            }
        )
    });

    it('should handle UPDATE_COURSES', () => {
        const courses = [];
        expect(
            courseReducer({}, {
                type: types.UPDATE_COURSES,
                courses,
            })
        ).toEqual({
            courses,
        });
    });
});