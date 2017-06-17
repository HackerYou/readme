import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Example from './components/Example/Example';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Example} />
        </div>
    </Router>
);

render(<App />, document.getElementById('app'));

