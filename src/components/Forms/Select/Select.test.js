import React from 'react';
import Select from './Select';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('It renders the select component when you pass in an array of options', () => {
    const props = {
        name: 'Test',
        options: ['calico', 'pooch', 'spaghetti'],
        value: 'test',
    };
    const component = renderer.create(<Select {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('It renders the select component when you pass and object into options prop', () => {
    const props = {
        name: 'Test',
        value: 'test',
        chosenKey: '_id',
        chosenVal: 'breed',
        chosenText: 'breed',
        options: [{petType: 'dog', breed:'bulldog', _id: '12312312', petName: 'fluffy'}, {petType: 'cat', breed:'calico', _id: '123213', petName: 'meow'}]
    };
    const component = renderer.create(<Select {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('It renders the select component with an inline label if you pass the labelInline prop', () => {
    const props = {
        name: 'Tiff',
        value: 'Tiff',
        labelText: 'Select your pet',
        labelInline: true,
        chosenKey: 'petName',
        options: ['calico', 'pooch', 'spaghetti'],
    };
    const component = renderer.create(<Select {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('It calls the function that gets passed into handle change', () => {
    const props = {
        name: 'Tiff',
        value: 'Tiff',
        chosenKey: 'petName',
        options: [{petType: 'dog', petName: 'fluffy'}, {petType: 'cat', petName: 'meow'}]
    };

    const mockHandleChange = jest.fn();
    const select = shallow(<Select {...props} handleChange={mockHandleChange} />);
    select.find('select').simulate('change', {target: {value: 'fluffy'}});
    expect(mockHandleChange).toHaveBeenCalled();
});







