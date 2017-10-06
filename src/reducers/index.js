import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './authReducer/authReducer';
import course from './courseReducer/courseReducer';
import classroom from './classroomReducer/classroomReducer';
import user from './userReducer/userReducer';
import lesson from './lessonReducer/lessonReducer';
import loader from './loaderReducer/loaderReducer';
import tests from './testReducer/testReducer';
import users from './usersReducer/usersReducer';
import broadcast from './broadcastReducer/broadcastReducer';
import topics from './topicsReducer/topicsReducer';
import issues from './issuesReducer/issuesReducer';
import media from './mediaReducer/mediaReducer';

const rootReducer =
    combineReducers({
        auth,
        course,
        classroom,
        user,
        lesson,
        loader,
        tests,
        users,
        broadcast,
        router,
        topics,
        issues,
        media,
    });

export default rootReducer;
