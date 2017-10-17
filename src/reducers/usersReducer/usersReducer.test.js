import usersReducer from './usersReducer';
import initialState from '../initialState';
import types from '../../actions/actionTypes';

describe('user reducer', () => {
   it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(
        {
            instructors: [],
            users: [],
            searchKeyword: '',
        }
    )
   });

   it('should handle UPDATE_INSTRUCTORS', () => {
        const instructors = [{
                firstName: 'Sylvia',
                lastName: 'Nguyen',
                email: 'sylvia@hackeryou.com',
        }];
        const users = usersReducer({}, {
            type: types.UPDATE_INSTRUCTORS,
            instructors,
        });
        expect(users.instructors).toEqual(instructors);
   });
});