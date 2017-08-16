import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, callToAction }) => {
    return (
        <div className="classCard">
            <article className="card">
                <h2>{title}</h2>
                <footer className="classCardMeta">
                    {callToAction && <button className="primary">{callToAction}</button>}
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
};

export default Card;
