import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './authReducer';
import course from './courseReducer';
import classroom from './classroomReducer';

const rootReducer = combineReducers({ auth, course, classroom, router });

export default rootReducer;
