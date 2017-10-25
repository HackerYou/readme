import React from 'react';
import { shallow } from 'enzyme';
import Members from './Members';
import renderer from 'react-test-renderer';

describe('spy addUser()', () => {
    it('calls "addUser()" on button click', () => {
      const spy = jest.spyOn(Members.prototype, 'addUser');

      const props = {
        users: {
          users: [],
        },
        actions: {
          getInstructors: function(){},
          broadcast: function(){},
          getAllUsersThunk: function(){},
          searchUsers: function(){},
          createUserThunk: function(){},
          updateUserThunk: function(){},
          deleteUserThunk: function(){},
        },
      }
      const test = shallow(<Members {...props} />)

      const wrapper = test.find('.createUser');
      wrapper.simulate('submit', { preventDefault: jest.fn() });
      expect(spy).toHaveBeenCalled();
    });
});