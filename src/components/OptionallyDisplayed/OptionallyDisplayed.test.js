import React from 'react';
import OptionallyDisplayed from './OptionallyDisplayed';
import { shallow } from 'enzyme';

test('It renders its children when display is set to true', () => {
    const component = shallow(
        <OptionallyDisplayed display={true}>
            <p>I'm a computer!</p>
        </OptionallyDisplayed>
    );
    expect(component.find('p').length).toBe(1);
});

test('It doesnt render its children when display is set to false', () => {
    const component = shallow(
        <OptionallyDisplayed display={false}>
            <p>I'm a computer!</p>
        </OptionallyDisplayed>
    );
    expect(component.find('p').length).toBe(0);
});