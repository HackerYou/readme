import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, name }) => (
    <span>
        <label htmlFor={name}>{label}</label>
        <textarea name={name} id={name} />
    </span>
);

export default TextArea;

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
