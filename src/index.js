import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/index';

const store = createStore(
    rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                Nothing to see here.
            </div>
        </Router>
    </Provider>
);

render(<App />, document.getElementById('app'));

