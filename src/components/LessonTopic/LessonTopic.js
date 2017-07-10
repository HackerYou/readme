import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';
import Prism from 'prismjs';

const prs = () => {
    try {
        return Prism.highlightAll(false);
    } catch (err) {
        return '';
    }
};

const LessonTopic = ({ topic }) => {
    return (
        <div className="lessonTopic">
            <h2 className="lessonTitle">{topic.title} showedit stub</h2>
            <Markdown options={{ html: true, highlight: prs }}>{topic.body}</Markdown>
            <span>Modal Stub</span>
        </div>
    );
};

LessonTopic.propTypes = {
    topic: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
};

export default LessonTopic;
