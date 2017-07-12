import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './loaderActions';
import expect from 'expect';
import types from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sync actions', () => {
    it('creates a LOADING action after being dispatched from the store,', () => {
        const store = mockStore({ loading: false, });
        const expectedActions = [
            {
                type: types.LOADING,
            }
        ]
        store.dispatch(actions.loading());
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('creates a LOADING_SUCCESS action after being dispatched from the store,', () => {
        const store = mockStore({ loading: false, });
        const expectedActions = [
            {
                type: types.LOADING_SUCCESS,
            }
        ]
        store.dispatch(actions.loadingSuccess());
        expect(store.getActions()).toEqual(expectedActions);
    });
});

