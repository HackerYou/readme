import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, value, labelText, type, placeholder, handleChange, classes }) => (
    <label htmlFor={name}>{labelText}
        <input
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            className={classes}
        />
    </label>
);

Input.defaultProps = {
    placeholder: '',
    classes: '',
    handleChange: null,
};

Input.propTypes = {
    classes: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Input;
