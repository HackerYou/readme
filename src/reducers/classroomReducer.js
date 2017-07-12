import types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.classroom, action) {
    switch (action.type) {
    case types.UPDATE_CLASSROOM: {
        // to fix: need to append test_results here since classrooms don't have them by default
        const classroom = JSON.parse(JSON.stringify(action.classroom));
        classroom.test_results = [];
        return classroom;
    }
    case types.GET_TEST_RESULTS: {
        const { classroom, users } = action;
        const testTable = [];
        users.forEach((userDetails) => {
            const { firstName, lastName, _id, test_results: testResults } = userDetails;
            const user = {
                _id,
                firstName,
                lastName,
                tests: {},
            };

            if (testResults) {
                const testsTaken = Object.keys(testResults);

                classroom.tests.forEach((test) => {
                    if (testsTaken.includes(test._id)) {
                        user.tests[test._id] = testResults[test._id];
                        user.tests[test._id].title = test.title;
                        user.tests[test._id]._id = test._id;
                    }
                });
                testTable.push(user);
            }
        });

        return Object.assign(action.classroom, { test_results: testTable });
    }
    default:
        return state;
    }
}
