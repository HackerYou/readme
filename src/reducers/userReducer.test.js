import userReducer from './userReducer';
import initialState from './initialState';
import types from '../actions/actionTypes';

describe('user reducer', () => {
   it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(
        {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'user@email.com',
        }
    )
   });

   it('should handle UPDATE_USER', () => {
        const user = {
                firstName: 'Sylvia',
                lastName: 'Nguyen',
                email: 'sylvia@hackeryou.com',
        };
        expect(
            userReducer({}, {
                type: types.UPDATE_USER,
                user,
            })
        ).toEqual(user);
   });
});