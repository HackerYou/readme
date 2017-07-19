import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, name, cols, rows, handleChange }) => (
    <span>
        <label htmlFor={name}>{label}</label>
        <textarea cols={cols} rows={rows} name={name} id={name} onChange={handleChange} />
    </span>
);

export default TextArea;

TextArea.propTypes = {
    handleChange: PropTypes.func.isRequired,
    cols: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
