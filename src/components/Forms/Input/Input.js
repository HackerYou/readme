import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, value, labelText, type, placeholder, handleChange, classes }) => (
    <span>
        {labelText !== '' && <label htmlFor={name}>{labelText}</label>}
        <input
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            className={classes}
        />
    </span>
);

Input.defaultProps = {
    placeholder: '',
    classes: '',
    labelText: '',
    handleChange: null,
};

Input.propTypes = {
    classes: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Input;
