import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers/index';
import { updateUserStatus } from './actions/userActions';
import Loader from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import ClassroomContainer from './components/Classroom/ClassroomContainer';
import LessonContainer from './components/Lesson/LessonContainer';
import Footer from './components/Footer/Footer';

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

store.dispatch(updateUserStatus());

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="wrapper">
                <Loader />
                <Route exact path="/" render={props => <Login {...props} />} />
                <Route path="/:all_routes" render={props => <HeaderContainer {...props} />} />
                <PrivateRoute path="/dashboard" component={DashboardContainer} />
                <PrivateRoute
                    path="/classroom/:classroom_id"
                    component={props => <ClassroomContainer {...props} />}
                />
                <PrivateRoute
                    path="/lesson/:lesson_id"
                    component={props => <LessonContainer {...props} />}
                />
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>
);

render(<App />, document.getElementById('app'));

