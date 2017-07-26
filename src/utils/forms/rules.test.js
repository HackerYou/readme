import * as ErrorMessages from './errorMessages';
import * as Rules from './rules';

it('should return null when you pass in text', () => {
    const inputValue = Rules.required('I am a field that has been filled out!');
    expect(inputValue).toBe(null);
});

it('should return a required error message when you dont pass in text', () => {
    const field = 'name';
    const inputValue = Rules.required('')(field);
    expect(inputValue).toBe(ErrorMessages.isRequired(field));
});