import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import { isLoggedIn } from './services/authService';
import rootReducer from './reducers/index';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import Footer from './components/Footer/Footer';

const history = createHistory();
const middleware = applyMiddleware(thunk, routerMiddleware(history));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        middleware,
    ),
);

if (isLoggedIn()) {
    store.dispatch(push('/dashboard'));
} else {
    store.dispatch(push('/login'));
}

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/login" component={Login} />
                <Route path="/login" render={props => <Login {...props} />} />
                <PrivateRoute path="/dashboard" component={DashboardContainer} />
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>
);

render(<App />, document.getElementById('app'));

