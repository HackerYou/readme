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
};

export default Input;
