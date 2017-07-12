import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, labelText, options, chosenKey, handleChange, classes }) => (
    <span>
        {labelText !== '' && <label htmlFor={name}>{labelText}</label>}
        <select name={name} className={classes} onChange={handleChange}>
            { options.map((option) => {
                if (typeof option === 'string') {
                    return <option value={option}>{option}</option>;
                }
                return <option value={option[chosenKey]}>{option[chosenKey]}</option>;
            })}
        </select>
    </span>
);

Select.defaultProps = {
    classes: '',
    labelText: '',
    handleChange: null,
    chosenKey: '',
};

Select.propTypes = {
    classes: PropTypes.string,
    // value: PropTypes.string.isRequired,
    chosenKey: PropTypes.string,
    name: PropTypes.string.isRequired,

    options: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    ).isRequired,
    labelText: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Select;
