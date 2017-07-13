import types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function (state = initialState.tests, action) {
    switch (action.type) {
    case types.GET_QUESTIONS: {
        return {
            questions: action.questions,
        };
    }
    default: {
        return state;
    }
    }
}
