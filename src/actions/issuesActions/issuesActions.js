// import clone from 'clone';

import types from '../actionTypes';
import { requestIssues } from '../../services/issuesService';

export function updateIssues(issues) {
    return {
        type: types.UPDATE_ISSUES,
        issues,
    };
}

export function getIssues() {
    return (dispatch) => {
        return requestIssues()
            .then(response => response.json())
            .then(({ issues }) => {
                dispatch(updateIssues(issues));
            })
            .catch((error) => { throw (error); });
    };
}
