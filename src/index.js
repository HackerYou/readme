import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Footer from './components/Footer/Footer';

import rootReducer from './reducers/index';
import Login from './components/Login/Login';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(
        middleware,
    ),
);

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/login" component={Login} />
                <Footer />
            </div>
        </Router>
    </Provider>
);

render(<App />, document.getElementById('app'));

