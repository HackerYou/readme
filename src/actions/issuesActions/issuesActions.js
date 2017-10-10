// import clone from 'clone';

import types from '../actionTypes';
import { requestIssues, postIssue, deleteIssue } from '../../services/issuesService';

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

export function createIssue(issueData) {
    // eslint-disable-next-line
    return (dispatch) => {
        return postIssue(issueData)
            .then(response => response.json())
            .then(({ issue }) => {
                dispatch({
                    type: types.ADD_ISSUE,
                    issue,
                });
            })
            .catch((error) => { throw (error); });
    };
}

export function removeIssue(issueId) {
    return (dispatch) => {
        return deleteIssue(issueId)
            .then(response => response.json())
            .then(({ issues }) => {
                dispatch(updateIssues(issues));
            })
            .catch((error) => { throw (error); });
    };
}
