import React from 'react';
import PropTypes from 'prop-types';

const Topic = ({ topic }) => (
    <article className="card topicCard">
        <section className="topicDetails">
            <h4>{topic.title}</h4>
            <p className="red">{topic.category}</p>
        </section>
    </article>
);

Topic.defaultProps = {
    category: '',
};

Topic.propTypes = {
    topic: PropTypes.shape({
        title: PropTypes.string.isRequired,
        category: PropTypes.string,
    }).isRequired,
};

export default Topic;
