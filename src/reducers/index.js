import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './authReducer';

const rootReducer = combineReducers({ auth, routerReducer });

export default rootReducer;
