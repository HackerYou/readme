import React from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ handleChange, pickerId, labelText, labelInline }) => {
    const labelClass = classNames({
        inline: labelInline,
    });
    const date = moment();
    return (
        <span>
            {labelText !== '' && <label htmlFor={pickerId} className={labelClass}>{labelText}</label>}
            <ReactDatePicker id={pickerId} selected={date} onChange={handleChange} />
        </span>
    );
};

DatePicker.defaultProps = {
    labelText: '',
    labelInline: false,
    pickerId: '',
};

DatePicker.propTypes = {
    handleChange: PropTypes.func.isRequired,
    labelText: PropTypes.string,
    labelInline: PropTypes.bool,
    pickerId: PropTypes.string.isRequired,
};

export default DatePicker;
