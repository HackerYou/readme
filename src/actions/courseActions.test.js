import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './courseActions';
import expect from 'expect';
import nock from 'nock';
import types from './actionTypes';

import config from '../services/config.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
      nock.cleanAll();
  })

  it('creates a UPDATE_CLASSROOMS action after classrooms are retrieved', () => {
        nock(`${config.getApiUrl()}`)
        .get('/course')
        .reply(200, {
            course: [],
        });
        const expectedActions = [
            {
                type: types.UPDATE_COURSES,
                courses: [],
            }

        ];
        const store = mockStore({ courses: [] });
        return store.dispatch(actions.getCourses()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
  
    })
})