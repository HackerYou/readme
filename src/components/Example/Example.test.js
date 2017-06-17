import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Example from './Example';

describe('<Example />', () => {
    it('allows us to set props', () => {
        const wrapper = mount(<Example test='Blah' />);
        expect(wrapper.props().test).to.equal('Blah');
        wrapper.setProps({ test: 'Boo' });
        expect(wrapper.props().test).to.equal('Boo');
    });
});
