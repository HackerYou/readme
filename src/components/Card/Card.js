import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ title, callToAction, id }) => {
    return (
        <div className="classCard">
            <article className="card">
                <h2>{title}</h2>
                <footer className="classCardMeta">
                    {callToAction && <Link className="primary" to={`/course-templates/${id}/edit`}>{callToAction}</Link>}
                </footer>
            </article>
        </div>
    );
};

Card.defaultProps = {
    callToAction: '',
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    callToAction: PropTypes.string,
    id: PropTypes.string.isRequired,
};

export default Card;
