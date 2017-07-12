import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './authActions';
import types from './actionTypes';
import expect from 'expect';
import nock from 'nock';

import config from '../services/config.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock_user_id = '56ba54e67a16140b67e4bb88'

describe('async actions', () => {
   afterEach(() => {
       nock.cleanAll();
   })

   // commented out until requests can throw
   xit('revokes a users token after receiving an authentication error', () => {
        nock(`${config.getApiUrl()}/`)
        .get('/user/authenticate')
        .query({
            email: 'baduser@evil.com',
            password: 'thisuserdoesntexist',
        })
        .reply(200, {
            "success": false,
            "message": "Authentication failed",
            "token": "",
        });

        const expectedActions = [
            {
                type: types.LOG_OUT,
            }
        ];

        const store = mockStore();
        return store.dispatch(actions.logInUser({
            email: 'baduser@evil.com',
            password: 'thisuserdoesntexist'
        }))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
   });

   it('creates LOG_IN_SUCCESS action after authentication is done, and LOG_OUT action after user logs out', () => {
    nock(`${config.getApiUrl()}/`)
        .get('/user/authenticate')
        .query({
            email: 'student@test.com',
            password: 'test',
        })
        .reply(200, {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiU2ltb24gQmxvb20iLCJhZG1pbiI6dHJ1ZSwiaW5zdHJ1Y3RvciI6dHJ1ZSwidXNlcl9pZCI6IjU2YmE1NGU2N2ExNjE0MGI2N2U0YmI4OCIsImlhdCI6MTQ5ODQ5OTk4NCwiZXhwIjoxNDk4OTMxOTg0fQ.JaYjeFG_HsNW-Mmr5gVap_9szjo5M0KdI6WCWzLDOrk",
            user_id: mock_user_id,
        });
    nock(`${config.getApiUrl()}/`)
        .get(`/user/${mock_user_id}`)
        .reply(200, {
            user: {},
        });

        const expectedActions = [
            {
                type: types.LOADING,
            },
            {
                payload: {
                    args: [ '/dashboard' ],
                    method: 'push',
                },
                type: '@@router/CALL_HISTORY_METHOD',
            },
            { 
                type: types.LOG_IN_SUCCESS,
            },
            {
                type: types.LOADING_SUCCESS,
            },
            {
                payload: {
                    args: [ '/' ],
                    method: 'push',
                },
                type: '@@router/CALL_HISTORY_METHOD',
            },
            { 
                type: types.LOG_OUT 
            }
        ]

        const store = mockStore({ loggedIn: false });

        return store.dispatch(actions.logInUser({
            email: 'student@test.com',
            password: 'test'
        }))
        .then(() => {
            store.dispatch(actions.logOutUser());
        })
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
   });
});