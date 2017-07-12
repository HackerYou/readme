import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.course, action) {
    switch (action.type) {
    case types.UPDATE_COURSES: {
        let courses = JSON.parse(JSON.stringify(action.courses));
        courses = courses.filter(course => course.template === false);
        return {
            courses,
        };
    }
    default:
        return state;
    }
}
