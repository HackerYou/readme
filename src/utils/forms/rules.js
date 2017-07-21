import * as ErrorMessages from './errorMessages';

export const required = (text) => {
    if (text) {
        return null;
    }
    return ErrorMessages.isRequired;
};

export const mustMatch = (field, fieldName) => {
    return (text, state) => {
        return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
    };
};

export const minLength = (length) => {
    return (text) => {
        return text.length >= length ? null : ErrorMessages.minLength(length);
    };
};

