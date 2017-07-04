import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './authReducer';
import course from './courseReducer';

const rootReducer = combineReducers({ auth, course, router });

export default rootReducer;
