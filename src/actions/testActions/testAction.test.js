import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './testActions';
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

    it('created a GET_QUESTIONS action after test has been created', () => {
        nock(`${config.getApiUrl().replace('v1', 'v2')}`)
        .get('/questions')
        .reply(200, {
            questions: [], 
        });
        const expectedActions = [
            {
                type: types.GET_QUESTIONS,
                questions: [],
            }
        ];
        const store = mockStore({ questions: [] });
        return store.dispatch(actions.retrieveQuestions()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})
