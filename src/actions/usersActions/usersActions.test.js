import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './usersActions';
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

    it('creates a UPDATE_INSTRUCTORS action after a user is retrieved', () => {
        nock(`${config.getApiUrl()}`)
        .get('/user')
        .reply(200, {
            user: {}
        });
        const expectedActions = [
            {
                type: types.UPDATE_INSTRUCTORS,
                instructors: {},
                users: [],
            }
        ];
        const store = mockStore({});
        return store.dispatch(actions.getInstructors())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});
