import React from 'react';
import PropTypes from 'prop-types';

const Issue = ({ issue }) => (
    <div className="classCard">
        <article className="issueCard card">
            <h3>{issue.title}</h3>
            <div className="created-info">
                <p className="created-by">
                    <strong>
                        <span>Created at:</span>
                        <span>{issue.created_at}</span>
                    </strong>
                </p>
                <p className="created-by">
                    <strong>
                        <span>By:</span>
                        <span>{issue.created_by.firstName} {issue.created_by.lastName}</span>
                    </strong>
                </p>
            </div>
            <p>{issue.body}</p>
            <button className="button primary">Edit Issue</button>
            <button className="button error">Remove Issue </button>
        </article>
    </div>
);

Issue.defaultProps = {
    issue: '',
};

Issue.propTypes = {
    issue: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        archived: PropTypes.bool.isRequired,
        archived_at: PropTypes.number,
        archived_by: PropTypes.string,
        body: PropTypes.string.isRequired,
        created_at: PropTypes.number.isRequired,
        created_by: PropTypes.shape({
            id: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
        }),
        title: PropTypes.string.isRequired,
        topic_id: PropTypes.string.isRequired,
        updated_at: PropTypes.number,

    }).isRequired,
};

export default Issue;
