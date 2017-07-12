import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './userActions';
import expect from 'expect';
import nock from 'nock';
import types from '../actionTypes';

import config from '../../services/config.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    })

    it('creates a UPDATE_USER action after a user is retrieved', () => {
        nock(`${config.getApiUrl()}`)
        .get('/user/100')
        .reply(200, {
            user: {}
        });
        const expectedActions = [
            {
                type: types.UPDATE_USER,
                user: {},
            }
        ];
        const store = mockStore({ user: {} });
        return store.dispatch(actions.getUserDetails(100)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
