import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './courseActions';
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

  it('creates a UPDATE_TEMPLATES action after templates are retrieved', () => {
    nock(`${config.getApiUrl()}`)
        .get('/course/template')
        .reply(200, {
            course: [],
        });
        const expectedActions = [
            {
                type: types.UPDATE_TEMPLATES,
                templates: [],
            }
        ];
        const store = mockStore({ courses: [] });
        return store.dispatch(actions.getTemplates()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });   
  });
  it('creates a UPDATE_TEMPLATES action after classrooms are retrieved', () => {
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
  
    });
    it('creates an UPDATE_COURSES action after new section is created', () => {
        nock(`${config.getApiUrl()}`)
        .post(`/course/100/section`, {
            title: 'section title',
        })
        .reply(200, {
            course: { 
                section: [],
            } 
        },)

        const expectedActions = [
            {
                type: types.UPDATE_COURSES,
                courses: {
                    section: [],
                },
            },
            {
                type: 'LOADING_SUCCESS'
            },
            {
                broadcastType: 'success',
                message: 'User successfully created.',
                type: 'BROADCAST_MESSAGE'
            },

        ]
        const store = mockStore({ courses: {
            section: [],
        } });
        

        return store.dispatch(actions.createNewSection({title: 'section title'}, 100)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
})