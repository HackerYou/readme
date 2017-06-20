import { combineReducers } from 'redux';

const initialState = {};

const counter = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

const rootReducer = combineReducers({ counter });

export default rootReducer;
