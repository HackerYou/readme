// import { logOutUser } from './authActions';

export function errorHandler(dispatch, error, type) {
    throw (type, error);
    // if (error.success === false) {
    //     dispatch({
    //         type,
    //     });
    //     logOutUser();
    // }
}
