import authReducer from './authReducer';
import config from '../../services/config';
import types from '../../actions/actionTypes';

const mockToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiU2ltb24gQmxvb20iLCJhZG1pbiI6dHJ1ZSwiaW5zdHJ1Y3RvciI6dHJ1ZSwidXNlcl9pZCI6IjU2YmE1NGU2N2ExNjE0MGI2N2U0YmI4OCIsImlhdCI6MTQ5ODUwNzU0OSwiZXhwIjoxNDk4OTM5NTQ5fQ.IKXH8RRwUW9bMSu76C8-t5S1FkDdAmrLuBt7XTUBfGQ';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual(
            {
                loggedIn: false,
            }
        )
    })

    it('should handle LOGIN_USER', () => {
        localStorage.setItem(`${config.getAppName()}_token`, mockToken);
        expect(
            authReducer({}, {
                type: types.LOG_IN_SUCCESS
            })
        ).toEqual({
            loggedIn: true
        });
    });

    it('should handle LOGOUT_USER', () => {
        localStorage.setItem(`${config.getAppName()}_token`, '');
        expect(
            authReducer({}, {
                type: types.LOG_OUT
            })
        ).toEqual({
            loggedIn: false
        });
    });
});