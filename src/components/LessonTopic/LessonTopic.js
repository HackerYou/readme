import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';
import Prism from 'prismjs';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';


const prs = () => {
    try {
        return Prism.highlightAll(false);
    } catch (err) {
        return '';
    }
};

const LessonTopic = ({ topic, admin }) => {
    return (
        <div className="lessonTopic">
            <h2 className="lessonTitle">{topic.title} {admin &&
                <div className="flag-in-topic">
                    <Link to={`/topic/${topic._id}`}><i className="fa fa-pencil topic-edit" /></Link>
                    <i className="fa fa-flag topic-edit" />
                </div>
                }
            </h2>
            <Markdown options={{ html: true, highlight: prs }}>{topic.body}</Markdown>
            <Modal>
                <form className="modalBody card flagForm">
                    <i className="fa fa-times chalk-close" />
                    <label htmlFor="issueNote">
                            What is your issue? Add a description here and we will fix it for you!
                    </label>
                    <textarea name="issueNote" />
                    <br />
                    <input type="submit" value="Send" />
                </form>
            </Modal>
        </div>
    );
};

LessonTopic.propTypes = {
    topic: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
    admin: PropTypes.bool.isRequired,

};

export default LessonTopic;
