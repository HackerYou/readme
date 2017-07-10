// import { logOutUser } from './authActions';

export function errorHandler(dispatch, error, type) {
    console.log(type, error);
    // if (error.success === false) {
    //     dispatch({
    //         type,
    //     });
    //     logOutUser();
    // }
}
