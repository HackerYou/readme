import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers/index';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import ClassroomContainer from './components/Classroom/ClassroomContainer';
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

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="wrapper">
                <Route exact path="/" render={props => <Login {...props} />} />
                <PrivateRoute path="/dashboard" component={DashboardContainer} />
                <PrivateRoute
                    path="/classroom/:classroom_id"
                    component={props => <ClassroomContainer {...props} />}
                />
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>
);

render(<App />, document.getElementById('app'));

