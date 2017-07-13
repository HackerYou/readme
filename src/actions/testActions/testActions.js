import { getQuestions } from '../../services/testService';
import types from '../actionTypes';

export function updateQuestions(questions) {
    return {
        type: types.GET_QUESTIONS,
        questions,
    };
}

export function retrieveQuestions() {
    return (dispatch) => {
        return getQuestions()
            .then(response => response.json())
            .then((data) => {
                dispatch(updateQuestions(data.questions));
            });
    };
}

