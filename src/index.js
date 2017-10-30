import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers/index';
import { updateUserStatus } from './actions/userActions/userActions';
import { endBroadcast } from './actions/broadcastActions/broadcastActions';
import Loader from './components/Loader/Loader';
import Broadcast from './components/Broadcast/Broadcast';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import Instructors from './components/Instructors/Instructors';
import MembersContainer from './components/Members/MembersContainer';
import ManageClassroomContainer from './components/ManageClassroom/ManageClassroomContainer';
import ClassroomContainer from './components/Classroom/ClassroomContainer';
import TestResultsContainer from './components/TestResults/TestResultsContainer';
import CreateTestContainer from './components/CreateTests/CreateTestContainer';
import LessonContainer from './components/Lesson/LessonContainer';
import TopicsContainer from './components/Topics/TopicsContainer';
import MediaContainer from './components/Media/MediaContainer';
import CourseTemplatesContainer from './components/CourseTemplates/CourseTemplatesContainer';
import Footer from './components/Footer/Footer';
import IssuesContainer from './components/Issues/IssuesContainer';
import EditCourseTemplates from './components/EditCourseTemplates/EditCourseTemplates';

import './styles/style.scss';

const history = createHistory();
const middleware = applyMiddleware(thunk, routerMiddleware(history));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        middleware,
    ),
);

history.listen(() => {
    const currentState = store.getState();
    if (currentState.broadcast.message.length > 0) {
        store.dispatch(endBroadcast());
    }
});

store.dispatch(updateUserStatus());

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Broadcast />
                <div className="wrapper">
                    <Loader />
                    <Route exact path="/" render={props => <Login {...props} />} />
                    <Route path="/:all_routes" render={props => <HeaderContainer {...props} />} />
                    <PrivateRoute
                        path="/dashboard"
                        component={props => <DashboardContainer {...props} />}
                    />
                    <Switch>
                        <PrivateRoute
                            path="/classroom/manage"
                            component={props => <ManageClassroomContainer {...props} />}
                        />
                        <PrivateRoute
                            path="/classroom/:classroom_id/test-results"
                            component={props => <TestResultsContainer {...props} />}
                        />
                        <PrivateRoute
                            path="/classroom/:classroom_id/create-test"
                            component={props => <CreateTestContainer {...props} />}
                        />
                        <PrivateRoute
                            path="/classroom/:classroom_id"
                            component={props => <ClassroomContainer {...props} />}
                        />
                        <PrivateRoute
                            path="/course-templates/:template_id/edit"
                            component={props => <EditCourseTemplates {...props} />}
                        />
                        <PrivateRoute
                            path="/course-templates"
                            component={props => <CourseTemplatesContainer {...props} />}
                        />
                    </Switch>
                    <PrivateRoute
                        path="/topics"
                        component={props => <TopicsContainer {...props} />}
                    />
                    <PrivateRoute
                        path="/lesson/:lesson_id"
                        component={props => <LessonContainer {...props} />}
                    />
                    <PrivateRoute
                        path="/instructors"
                        component={props => <Instructors {...props} />}
                    />
                    <PrivateRoute
                        path="/members"
                        component={props => <MembersContainer {...props} />}
                    />
                    <PrivateRoute
                        path="/media"
                        component={props => <MediaContainer {...props} />}
                    />
                    <PrivateRoute
                        path="/issues"
                        component={props => <IssuesContainer {...props} />}
                    />
                    <Footer />
                </div>
            </div>
        </ConnectedRouter>
    </Provider>
);

render(<App />, document.getElementById('app'));

