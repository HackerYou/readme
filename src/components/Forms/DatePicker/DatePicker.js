import React from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ handleChange, pickerId, labelText, labelInline, selectedDate }) => {
    const labelClass = classNames({
        inline: labelInline,
    });
    return (
        <span className="datepicker">
            <label htmlFor={pickerId} className={labelClass}>{labelText}</label>
            <ReactDatePicker
                id={pickerId}
                selected={selectedDate}
                onChange={date => handleChange(date, pickerId)}
            />
        </span>
    );
};

DatePicker.defaultProps = {
    labelText: '',
    labelInline: false,
    pickerId: '',
};

DatePicker.propTypes = {
    selectedDate: PropTypes.shape({}).isRequired,
    handleChange: PropTypes.func.isRequired,
    labelText: PropTypes.string,
    labelInline: PropTypes.bool,
    pickerId: PropTypes.string.isRequired,
};

export default DatePicker;
