import React from 'react';
import PropTypes from 'prop-types';
import keygen from 'keygenerator';
import classNames from 'classnames';

const Select = (props) => {
    const {
        name,
        labelText,
        options,
        chosenKey,
        chosenVal,
        labelInline,
        handleChange,
        classes,
        chosenText,
        value,
    } = props;
    const labelClass = classNames({
        inline: labelInline,
    });
    return (<span>
        {labelText !== '' && <label htmlFor={name} className={labelClass}>{labelText}</label>}
        <select name={name} className={classes} value={value} onChange={handleChange}>
            <option value="default" disabled>Select an option...</option>
            { options.map((option) => {
                if (typeof option === 'string') {
                    return <option key={keygen._()} value={option}>{option}</option>;
                }
                return (
                    <option key={option[chosenKey]} value={option[chosenVal]}>
                        {option[chosenText]}
                    </option>
                );
            })}
        </select>
    </span>);
};

Select.defaultProps = {
    classes: '',
    labelText: '',
    handleChange: null,
    chosenKey: '',
    chosenText: '',
    chosenVal: '',
    labelInline: false,
};

Select.propTypes = {
    value: PropTypes.string.isRequired,
    labelInline: PropTypes.bool,
    classes: PropTypes.string,
    chosenKey: PropTypes.string,
    chosenText: PropTypes.string,
    chosenVal: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    ).isRequired,
    labelText: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Select;
