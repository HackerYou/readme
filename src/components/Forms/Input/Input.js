import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => {
    const { name,
        value,
        labelText,
        labelInline,
        type,
        placeholder,
        handleChange,
        largeLabel,
        classes,
        index,
        checked,
    } = props;
    const labelClass = classNames({
        inline: labelInline,
        largeLabel,
    });
    return (<span>
        {labelText !== '' && <label htmlFor={name} className={labelClass}>{labelText}</label>}
        <input
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            className={classes}
            data-index={index}
            checked={checked}
        />
    </span>);
};

Input.defaultProps = {
    labelInline: false,
    largeLabel: false,
    placeholder: '',
    classes: '',
    labelText: '',
    handleChange: null,
    index: 0,
    checked: false,
};

Input.propTypes = {
    classes: PropTypes.string,
    labelInline: PropTypes.bool,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    largeLabel: PropTypes.bool,
    index: PropTypes.number,
    checked: PropTypes.bool,
};

export default Input;
