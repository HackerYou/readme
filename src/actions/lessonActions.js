import types from './actionTypes';
import { getLessonById } from '../services/lessonService';

export function updateLesson(lesson) {
    return {
        type: types.UPDATE_LESSON,
        lesson,
    };
}

export function getLesson(lessonId) {
    return (dispatch) => {
        return getLessonById(lessonId)
            .then(response => response.json())
            .then((data) => {
                dispatch(updateLesson(data));
            });
    };
}
