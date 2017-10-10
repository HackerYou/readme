import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Issue = props => (
    <div className="classCard">
        <article className="issueCard card">
            <h3>{props.issue.title}</h3>
            <div className="created-info">
                <p className="created-by">
                    <strong>
                        <span>Created at:</span>
                        <span>{props.issue.created_at}</span>
                    </strong>
                </p>
                <p className="created-by">
                    <strong>
                        <span>By:</span>
                        <span>
                            {props.issue.created_by.firstName} {props.issue.created_by.lastName}
                        </span>
                    </strong>
                </p>
            </div>
            <p>{props.issue.body}</p>
            <Link className="button primary" to={`/topic/${props.issue.topic_id}/edit`}>Edit Issue</Link>
            <button
                onClick={() => { props.delete(props.issue._id); }}
                className="button error"
            >
                Remove Issue
            </button>
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
    delete: PropTypes.func.isRequired,
};

export default Issue;
