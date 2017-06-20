import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, labelText, type, placeholder, handleChange }) => (
    <label htmlFor={name}>{labelText}
        <input name={name} type={type} placeholder={placeholder} onChange={handleChange} />
    </label>
);

Input.defaultProps = {
    placeholder: '',
    handleChange: null,
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Input;
