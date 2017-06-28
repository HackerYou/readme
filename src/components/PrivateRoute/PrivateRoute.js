import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isLoggedIn } from '../../services/authService';

export const handleRender = (Component, props) => {
    if (isLoggedIn()) {
        return <Component {...props} />;
    } else {
        return <Redirect to={{ pathname: '/login' }} />;
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => handleRender(Component, props)}
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
};

export default PrivateRoute;
