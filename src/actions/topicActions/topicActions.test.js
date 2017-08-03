import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './topicActions';
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

    it('created a UPDATE_TOPICS action after topic has been requested', () => {
        nock(`${config.getApiUrl()}`)
        .get('/topic/')
        .reply(200, {
            topic: {
                topics: [],
            }, 
        });
        const expectedActions = [
            {
                type: types.UPDATE_TOPICS,
                topics: {
                    topics: [],
                },
            }
        ];
        const store = mockStore({ topics: { topics: [] } });
        return store.dispatch(actions.getTopicsThunk()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})
