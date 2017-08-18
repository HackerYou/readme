import React from 'react';
import PropTypes from 'prop-types';
import keygen from 'keygenerator';

const Checkbox = ({ id, handleChange, labelText }) => {
    return (
        <span>
            <label htmlFor={id}>{labelText}</label>
            <input onChange={handleChange} id={id} type="checkbox" />
        </span>
    );
};

Checkbox.defaultProps = {
    labelText: '',
    handleChange: null,
    id: keygen._(),
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    labelText: PropTypes.string,
};

export default Checkbox;
