import React from 'react';
import { shallow } from 'enzyme';
import MembersCard from './MembersCard';
import renderer from 'react-test-renderer';

test('It calls the function that gets passed in as a prop to removeUser when you click on icon.', () => {
  const mockHandleChange = jest.fn();
  const mockOnClick = jest.fn();

  const props = {
    handleChange: mockHandleChange,
    index: 20,
    member: {
      _id: "87238",
      admin: true,
      courseSections: [{ id: "58743959", courseId: "9898737", sections: ["567567"] }],
      courses: ["9874569845", "89549876945"],
      created_at: 889798789,
      email: "sylvia@hackeryou.com",
      favoriteClassrooms: ["97593874"],
      firstName: "Sylvia",
      first_sign_up: true,
      instructor: true,
      lastName: "Nguyen",
      tests: ["597218b3588f150968b230ca"],
      updated_at: 1508358562226,
    },
  };

  const membersCard = shallow(<MembersCard {...props} removeUser={mockOnClick} />);
  membersCard.find('.chalk-remove').simulate('click', { target: { value: 'this works' } }); 

  expect(mockOnClick).toHaveBeenCalled();
});

