import React from 'react';
import TextArea from './TextArea';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('It renders the textarea component', () => {
    const props = {
        name: 'description',
        label: 'Dummy Textarea Component',
        cols: '30',
        rows: '10',
        handleChange: () => null,
        val: 'This is a dummy textarea component'
    };
    const component = renderer.create(<TextArea {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
