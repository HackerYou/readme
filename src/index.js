import React from 'react';
import { render } from 'react-dom';
import Example from './components/Example/Example';

const App = () => (
    <div>
        <Example test="A test prop." />
    </div>
);

render(<App />, document.getElementById('app'));

