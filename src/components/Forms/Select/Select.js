import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, labelText, options, handleChange, classes }) => (
    <span>
        {labelText !== '' && <label htmlFor={name}>{labelText}</label>}
        <select name={name} className={classes} onChange={handleChange}>
            { options.map((option) => {
                if (typeof option === 'string') {
                    return <option value={option}>{option}</option>;
                }
                return <option value={option.value}>{option.text}</option>;
            })}
        </select>
    </span>
);

Select.defaultProps = {
    classes: '',
    labelText: '',
    handleChange: null,
};

Select.propTypes = {
    classes: PropTypes.string,
    // value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

    options: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            value: PropTypes.string,
        }).isRequired,
    ).isRequired,
    labelText: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Select;
