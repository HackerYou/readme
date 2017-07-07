import { logOutUser } from './authActions';

export function errorHandler(dispatch, error, type) {
    if (error.success === false) {
        dispatch({
            type,
        });
        logOutUser();
    }
}
