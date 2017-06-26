import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input';

test('It calls the function that gets passed in as a prop to handleChange when you type in text.', () => {
    const mockHandleChange = jest.fn();
    const input = shallow(<Input labelText='label text' value='test' name='test' type='' handleChange={mockHandleChange} />);
    input.find('input').simulate('change', {target: {value: 'Simon'}});
    expect(mockHandleChange).toHaveBeenCalled();
});