import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './authReducer';
import course from './courseReducer';
import classroom from './classroomReducer';
import user from './userReducer';
import lesson from './lessonReducer';
import loader from './loaderReducer';

const rootReducer = combineReducers({ auth, course, classroom, user, lesson, loader, router });

export default rootReducer;
