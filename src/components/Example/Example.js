import React from 'react';
import PropTypes from 'prop-types';

import './Example.scss';

const Example = ({ test }) => (
    <div>{ test }</div>
);

Example.propTypes = {
    test: PropTypes.string.isRequired,
};

export default Example;

