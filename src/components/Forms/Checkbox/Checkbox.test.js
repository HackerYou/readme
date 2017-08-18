import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from './Checkbox';
import renderer from 'react-test-renderer';

test('It renders the checkbox component', () => {
    const props = {
        labelText: "Title",
        id: "8675309",
    };
    const component = renderer.create(<Checkbox {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});