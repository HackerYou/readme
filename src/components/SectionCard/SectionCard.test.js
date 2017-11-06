import React from 'react';
import { shallow } from 'enzyme';
import SectionCard from './SectionCard';
import renderer from 'react-test-renderer';

test('It calls the function that gets passed in as a prop to remove section on click.', () => {
  const mockOnClick = jest.fn();

  const props = {
    title: 'This is a Section Title',
    id: '98748345934',
    lessons: [{}],
  }

  const sectionCard = shallow(<SectionCard {...props} removeSection={mockOnClick} />);
  sectionCard.find('.deleteSection').simulate('click', { target: { value: 'Removes section' } });

  expect(mockOnClick).toHaveBeenCalled();
});
