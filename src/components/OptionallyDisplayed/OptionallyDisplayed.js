

import React from 'react';
import PropTypes from 'prop-types';

export default function OptionallyDisplayed({ display, children }) {
    if (display === true) {
        return (<div>{children}</div>);
    }
    return null;
}

OptionallyDisplayed.propTypes = {
    display: PropTypes.bool.isRequired,
    children: PropTypes.shape({}).isRequired,
};
