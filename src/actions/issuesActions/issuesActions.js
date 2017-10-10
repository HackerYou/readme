// import clone from 'clone';
import config from '../../services/config';
import types from '../actionTypes';
import { requestIssues, postIssue, deleteIssue, updateIssue } from '../../services/issuesService';

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

export function archiveIssue(issueData) {
    const updatedIssue = issueData;

    updatedIssue.archived = !updatedIssue.archived;
    updatedIssue.archived_at = Date.now();
    updatedIssue.archived_by = config.getUserIdFromToken();
    return (dispatch) => {
        return updateIssue(updatedIssue._id, updatedIssue)
            .then(response => response.json())
            .then(({ issue }) => {
                dispatch({
                    type: types.TOGGLE_ARCHIVE,
                    issue,
                });
            })
            .catch((error) => { throw (error); });
    };
}
