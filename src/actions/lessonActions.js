import types from './actionTypes';
import { getLessonById } from '../services/lessonService';
import { loading, loadingSuccess } from './loaderActions';

export function updateLesson(lesson) {
    return {
        type: types.UPDATE_LESSON,
        lesson,
    };
}

export function getLesson(lessonId) {
    return (dispatch) => {
        dispatch(loading());
        return getLessonById(lessonId)
            .then(response => response.json())
            .then((data) => {
                dispatch(loadingSuccess());
                dispatch(updateLesson(data.lesson));
            });
    };
}
