import React from 'react';
import { shallow } from 'enzyme';
import EditCourseTemplates from './EditCourseTemplates';
import renderer from 'react-test-renderer';


describe('Spy on addSection()', () => {
  it('calls addSection() on form submission', () => {
    const spy = jest.spyOn(EditCourseTemplates.prototype, 'addSection');

    const props = {
      course: {
        courses: {
          sections: [],
          id: '2349249',
        },
      },
      actions: {
        getCourse: function () { },
        createNewSection: function () { },
        deleteSection: function () { },
      },
      match: {
        params: {
          template_id: '45876984530',
        },
      },
    }
    const test = shallow(<EditCourseTemplates {...props} />)

    const wrapper = test.find('.new-lesson');
    wrapper.simulate('submit', { preventDefault: function () { } });
    expect(spy).toHaveBeenCalled();
  });
});


