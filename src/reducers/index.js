import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './authReducer';
import course from './courseReducer';
import classroom from './classroomReducer';
import user from './userReducer';

const rootReducer = combineReducers({ auth, course, classroom, user, router });

export default rootReducer;
