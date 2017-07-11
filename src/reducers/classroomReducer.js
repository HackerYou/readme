import types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.classroom, action) {
    switch (action.type) {
    case types.UPDATE_CLASSROOM:
        return action.classroom;
    case types.GET_TEST_RESULTS: {
        const { classroom, users } = action;
        const testTable = [];
        users.forEach((userDetails) => {
            const { firstName, lastName, test_results } = userDetails;
            const user = {
                firstName,
                lastName,
            };
            const testsTaken = Object.keys(test_results);

            classroom.tests.forEach((test) => {
                if (testsTaken.includes(test._id)) {
                    user[test._id] = test_results[test._id];
                    user[test._id].title = test.title;
                }
            });
            testTable.push(user);
        });
        return {
            test_results: testTable,
        };
    }
    default:
        return state;
    }
}
