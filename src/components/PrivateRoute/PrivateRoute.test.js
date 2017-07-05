import React from 'react';
import { shallow, mount } from 'enzyme';
import PrivateRoute from './PrivateRoute';
import config from '../../services/config';
import { handleRender } from './PrivateRoute';
import { isLoggedIn } from '../../services/authService';

const mockToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiU2ltb24gQmxvb20iLCJhZG1pbiI6dHJ1ZSwiaW5zdHJ1Y3RvciI6dHJ1ZSwidXNlcl9pZCI6IjU2YmE1NGU2N2ExNjE0MGI2N2U0YmI4OCIsImlhdCI6MTQ5ODUwNzU0OSwiZXhwIjoxNDk4OTM5NTQ5fQ.IKXH8RRwUW9bMSu76C8-t5S1FkDdAmrLuBt7XTUBfGQ';

test('It renders the correct component if user has a valid token', () => {
    localStorage.setItem(`${config.getAppName()}_token`, mockToken);
    const component = shallow(handleRender(() => <p>Access Granted</p>, {}));
    expect(component.text()).toBe('Access Granted');
});

test('It renders a redirect if the user does not have a valid token', () => {
    localStorage.setItem(`${config.getAppName()}_token`, null);
    const component = handleRender(() => <p>Access Granted</p>, {});
    expect(component.props.to.pathname).toBe('/');   
});