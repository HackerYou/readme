import React from 'react';
import Select from './Select';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('It renders the select component when you pass in array into options prop', () => {
    const props = {
        name: 'Test',
        options: ['blue', 'green', 'darkcyan']
    };
    const component = renderer.create(<Select name={props.name} val={props.val} options={props.options} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('It renders the select component when you pass and object into options prop', () => {
    const props = {
        name: 'Tiff',
        chosenKey: '_id',
        chosenVal: 'breed',
        options: [{petType: 'dog', breed:'bulldog', _id: '12312312', petName: 'fluffy'}, {petType: 'cat', breed:'calico', _id: '123213', petName: 'meow'}]
    };
    const component = renderer.create(<Select name={props.name} chosenKey={props.chosenKey} chosenVal={props.chosenVal} options={props.options}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('It calls the function that gets passed into handle change', () => {
    const props = {
        name: 'Tiff',
        chosenKey: 'petName',
        options: [{petType: 'dog', petName: 'fluffy'}, {petType: 'cat', petName: 'meow'}]
    };

    const mockHandleChange = jest.fn();
    const select = shallow(<Select name={props.name} chosenKey={props.chosenKey} options={props.options} handleChange={mockHandleChange} />);
    select.find('select').simulate('change', {target: {value: 'fluffy'}});
    expect(mockHandleChange).toHaveBeenCalled();
});







