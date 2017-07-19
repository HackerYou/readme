import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input';
import renderer from 'react-test-renderer';

test('It calls the function that gets passed in as a prop to handleChange when you type in text.', () => {
    const mockHandleChange = jest.fn();
    const input = shallow(<Input labelText='label text' value='test' name='test' type='' handleChange={mockHandleChange} />);
    input.find('input').simulate('change', {target: {value: 'Simon'}});
    expect(mockHandleChange).toHaveBeenCalled();
});

test('It renders the input component with an inline label if you pass the labelInline prop', () => {
    const props = {
        labelText: "Title",
        name: "title",
        type: "text",
        value: "title",
        labelInline: true,
    };
    const component = renderer.create(<Input {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});