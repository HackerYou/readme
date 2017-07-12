import React from 'react';
import PropTypes from 'prop-types';
import keygen from 'keygenerator';


const Select = ({ name, labelText, options, chosenKey, chosenVal, handleChange, classes }) => (
    <span>
        {labelText !== '' && <label htmlFor={name}>{labelText}</label>}
        <select name={name} className={classes} onChange={handleChange}>
            { options.map((option) => {
                if (typeof option === 'string') {
                    return <option key={keygen._()} value={option}>{option}</option>;
                }
                return <option value={option[chosenVal]}>{option[chosenKey]}</option>;
            })}
        </select>
    </span>
);

Select.defaultProps = {
    classes: '',
    labelText: '',
    handleChange: null,
    chosenKey: '',
    chosenVal: '',
};

Select.propTypes = {
    classes: PropTypes.string,
    chosenKey: PropTypes.string,
    chosenVal: PropTypes.string,
    name: PropTypes.string.isRequired,

    options: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    ).isRequired,
    labelText: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Select;
